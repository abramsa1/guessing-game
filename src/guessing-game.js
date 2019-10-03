class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.startNumber = min;
        this.limitNumber = max;
    }

    guess() {
        return Math.ceil((this.startNumber + this.limitNumber) / 2);
    }

    lower() {
        this.setRange(this.startNumber, Math.ceil((this.startNumber + this.limitNumber) / 2));
    }

    greater() {
        this.setRange(Math.ceil((this.startNumber + this.limitNumber) / 2), this.limitNumber);
    }
}

module.exports = GuessingGame;