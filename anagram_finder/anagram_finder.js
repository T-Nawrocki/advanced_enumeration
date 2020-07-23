const AnagramFinder = function (word) {
    this.word = word.toLowerCase();
    this.chars = this.word.split("").sort();
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(word => {
        word = word.toLowerCase()
        const chars = word.split("").sort();

        // every char in base word must be in target word
        // TODO Replace with checking if chars.sorted are equal
        let result = this.chars.every((char, index) => chars[index] === char);
        // let result = this.chars.every(char => chars.includes(char));

        // length of both words must match
        result = result && this.word.length === word.length;

        // words cannot be equal
        result = result && this.word !== word;

        return result
    });
}


module.exports = AnagramFinder;
