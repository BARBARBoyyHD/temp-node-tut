const { readFileSync, writeFileSync } = require("fs");
console.log('starting');
const first = readFileSync("content/first.txt", "utf8");
const second = readFileSync("content/subfolder/second.txt", "utf8");

console.log(first, second);

writeFileSync('./content/result-sync.txt', `here is the result : ${(first, second)}`, {
  flag: "a",
});
console.log('done with this task');
console.log('starting the next one');

/**
 * The flag option is used to specify how the file should be opened. In this case, 'a' stands for 'append'. This means that the data will be added to the end of the file. If the file does not exist, it will be created.
 */
