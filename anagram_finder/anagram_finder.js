const AnagramFinder = function (word) {
    this.word = word;
    this.chars = this.word.split("");
}

AnagramFinder.prototype.findAnagrams = function (otherWords) {
    return otherWords.filter(word => {
        const chars = word.split("");

        return this.chars.every(char => chars.includes(char));
    });
}


module.exports = AnagramFinder;
