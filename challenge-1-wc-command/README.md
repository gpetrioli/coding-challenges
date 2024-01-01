## Coding Challenge #1 - Build your own wc!

Challenge [details](https://codingchallenges.substack.com/p/coding-challenge-1).

### Usage
 `node ccwc.js [-clmw] [file ...]`

### Steps
- [x] Step 1: Support the command line option `-c` that outputs the number of bytes in a file.
- [x] Step 2: Support the command line option `-l` that outputs the number of lines in a file.
- [x] Step 3: Support the command line option `-w` that outputs the number of words in a file.
- [x] Step 4: Support the command line option `-m` that outputs the number of characters in a file.
- [x] Step 5: Support the default option - i.e. no options are provided, which is the equivalent to the `-c`, `-l` and `-w` options


### Notes

The code uses the `readline` node module, and so it is not fool proof in counting the new lines. It currently just adds 2 chars / bytes for each line to the relevant counter.

### Dependencies:
- I have use [`yargs-parser`](https://github.com/yargs/yargs-parser) to parse the parameters passed to the command, 
- also i have used [`glob`](https://github.com/isaacs/node-glob) to expand the file pattern