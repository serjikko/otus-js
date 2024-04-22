function isWord(str) {
    return str.trim().split(' ').length === 1;
}
module.exports = isWord;