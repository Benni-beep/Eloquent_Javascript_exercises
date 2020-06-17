const prefixArray = require('./einhorn.json')

for (prefix of prefixArray) {
    let base = "einhorn";
    word = prefix += base;
    console.log(word);
}