import readline from "readline";

export async function getFileCounters(stream) {
  let lineCount = 0;
  let wordCount = 0;
  let charCount = 0;
  let byteCount = 0;

  const readInterface = readline.createInterface({
    input: stream || process.stdin,
    crlfDelay: Infinity,
  });
  for await (const line of readInterface) {
    // Each line in input.txt will be successively available here as `line`.
    lineCount++;
    wordCount += line
      .split(/[\u0009\u000a\u000b\u000c\u000d\u0020]/)
      .filter((word) => Boolean(word.trim())).length;
    charCount += line.length + 2; // +2 for \r\n
    byteCount += Buffer.byteLength(line, "utf8") + 2; // +2 for \r\n
  }
  return { lineCount, wordCount, charCount, byteCount };
}
