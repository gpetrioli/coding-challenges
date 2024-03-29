## Coding Challenge #1 - Build your own wc!

Challenge [details](https://codingchallenges.substack.com/p/coding-challenge-1).

### Usage
 ```
 node ccwc.js [-clmw] [file1 ...]
 node ccwc.js [-c] [-l] [-m] [-w] [file1 ...]
 ``````

### Steps
- [x] Step 1: Support the command line option `-c` that outputs the number of bytes in a file.
- [x] Step 2: Support the command line option `-l` that outputs the number of lines in a file.
- [x] Step 3: Support the command line option `-w` that outputs the number of words in a file.
- [x] Step 4: Support the command line option `-m` that outputs the number of characters in a file.
- [x] Step 5: Support the default option - i.e. no options are provided, which is the equivalent to the `-c`, `-l` and `-w` options
- [x] Step 6: Support being able to read from standard input if no filename is specified.

### Bonus steps
- [x] Handles multiple files (*and file globbing*)
- [x] Shows total counters if more than one files are targeted


### Dependencies:
- I have use [`yargs-parser`](https://github.com/yargs/yargs-parser) to parse the parameters passed to the command, 
- also i have used [`glob`](https://github.com/isaacs/node-glob) to expand the file pattern