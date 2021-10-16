const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    getGuess: function () {
        let guess = 101;
        while (guess < this.smallestNum || guess > this.biggestNum) {
            guess = parseInt(prompt(` Enter a guess between ${this.smallestNum} and ${this.biggestNum}`, "Your guess"));
        }
        return guess;
    },
    play: function () {
        this.secretNum = Math.floor(Math.random() *
            (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        this.getGuess();
    },
}
game.prevGuesses = [];
console.log(game);

  // let num = game.getGuess(); 

  // console.log(num);