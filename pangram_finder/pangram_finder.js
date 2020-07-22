const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  phrase = phrase.toLowerCase();  // case insensitive
  phrase = phrase.split("");  // splits to array of chars
  phrase = phrase.filter(char => this.alphabet.includes(char));  // no punctuation
  this.phrase = phrase
}

PangramFinder.prototype.isPangram = function () {
  return this.alphabet.every(char => this.phrase.includes(char));
}

module.exports = PangramFinder;
