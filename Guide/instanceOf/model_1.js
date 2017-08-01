
function Answer(value) {
    this._val = value;
}

Answer.prototype.get = function fn1() {
    return this._val;
}

//proceture
function FirmAnswer(value) {
    Answer.call(this, value);
}


FirmAnswer.prototype = Object.create(Answer.prototype);

FirmAnswer.prototype.constructor = FirmAnswer;

FirmAnswer.prototype.get = function fn2() {
    return Answer.prototype.get.call(this) + " !";
};

var lifeAnswer = new Answer(42);
var luckyAnswer = new FirmAnswer(7);

lifeAnswer instanceof Answer; //true 
lifeAnswer instanceof FirmAnswer; //false 
luckyAnswer instanceof Answer; //true
luckyAnswer instanceof FirmAnswer; //true

// console.log(luckyAnswer instanceof FirmAnswer);