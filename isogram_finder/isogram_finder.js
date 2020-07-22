const IsogramFinder = function (word) {
    this.word = word.toLowerCase();
}

IsogramFinder.prototype.isIsogram = function () {
    const allChars = this.word.split("");

    const uniqueChars = allChars.filter((char, index) => {
        // indexOf returns index of first found instance
        return allChars.indexOf(char) === index  
    });

    return uniqueChars.length === allChars.length;
}

module.exports = IsogramFinder;
