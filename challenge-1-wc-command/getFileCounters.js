import fs from "fs";

export async function getFileCounters(stream) {
  let lineCount = 0;
  let wordCount = 0;
  let charCount = 0;
  let byteCount = 0;

  for await (const line of lineByLine(stream)) {
    // Each line in input.txt will be successively available here as `line`.
    lineCount++;
    wordCount += line
      .split(/[\u0009\u000a\u000b\u000c\u000d\u0020]/)
      .filter((word) => Boolean(word.trim())).length;
    charCount += line.length;
    byteCount += Buffer.byteLength(line, "utf8");
  }

  return { lineCount, wordCount, charCount, byteCount };
}

export function addToTotalCounters(totalCounters, counters) {
  for (const [counterName, counterValue] of Object.entries(counters)) {
    totalCounters[counterName] =
      (totalCounters[counterName] || 0) + counterValue;
  }
}

async function* lineByLine(stream) {
  let line = "";
  for await (const chunk of stream) {
    for (const char of chunk) {
      line += char;
      if (char === "\n") {
        yield line;
        line = "";
      }
    }
  }

  if (line) {
    yield line;
  }
}
