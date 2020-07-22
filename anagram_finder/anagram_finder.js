const AnagramFinder = function (word) {
    this.word = word.toLowerCase();
    this.chars = this.word.split("");
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(word => {
        word = word.toLowerCase()
        const chars = word.split("");

        // every char in base word must be in target word
        let result = this.chars.every(char => chars.includes(char));

        // length of both words must match
        result = result && this.word.length === word.length;

        return result
    });
}


module.exports = AnagramFinder;
