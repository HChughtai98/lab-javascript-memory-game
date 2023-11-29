class MemoryGame {
  constructor(cards, pickedCards, pairsClicked, pairsGuessed) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  
  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }

    for (let i = 0; i < this.cards.length; i++) {
      let shuffle = Math.floor(Math.random() * this.cards.length);
      let randomCard = this.cards[i];
      this.cards[i] = this.cards[shuffle];
      this.cards[shuffle] = randomCard;
    }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 == card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    return this.pairsGuessed === this.cards.length / 2;
  }
}
