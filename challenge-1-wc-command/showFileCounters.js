export function showFileCounters({ filePath = "", counters, options }) {
  const countersToShow = [];
  if (options.l) {
    countersToShow.push(formatNumber(counters.lineCount));
  }
  if (options.w) {
    countersToShow.push(formatNumber(counters.wordCount));
  }
  if (options.c) {
    countersToShow.push(formatNumber(counters.byteCount));
  }
  if (options.m) {
    countersToShow.push(formatNumber(counters.charCount));
  }

  console.log(countersToShow.join(" "), filePath);
}

function formatNumber(value) {
  const leftPadding = 8;
  return value.toString().padStart(leftPadding, " ");
}
