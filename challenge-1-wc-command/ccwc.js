import fs from "fs";
import { globSync } from "glob";
import parser from "yargs-parser";
import { getFileCounters, addToTotalCounters } from "./getFileCounters.js";
import { showFileCounters } from "./showFileCounters.js";

async function main() {
  const availableOptions = ["c", "l", "m", "w"];
  const options = parser(process.argv.slice(2), {
    boolean: availableOptions,
  });

  const fileGlobs = options._;
  if (!availableOptions.some((option) => options[option] === true)) {
    // default to -clw
    options.c = true;
    options.l = true;
    options.w = true;
  }
  if (fileGlobs.length === 0) {
    // fallback to standard input
    try {
      process.stdin.setEncoding("utf8");
      const counters = await getFileCounters(process.stdin);
      showFileCounters({ counters, options });
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  } else {
    const files = fileGlobs
      .flatMap((fileGlob) => globSync(fileGlob, { withFileTypes: true }))
      .filter((file) => file.isFile());
    const totalCounters = {};

    for (const file of files) {
      const relativePath = file.relative();
      try {
        const counters = await getFileCounters(
          fs.createReadStream(relativePath, {
            autoClose: true,
            encoding: "utf8",
          })
        );
        showFileCounters({ filePath: relativePath, counters, options });
        addToTotalCounters(totalCounters, counters);
      } catch (err) {
        console.error(err);
        process.exit(1);
      }
    }

    if (files.length > 1) {
      showFileCounters({ filePath: "total", counters: totalCounters, options });
    }
  }

  process.exit(0);
}

main();
