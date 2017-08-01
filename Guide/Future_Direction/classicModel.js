/**
 * Created by Amir on 12/07/2017.
 */

 
function Answer(value) {
    this._val = value;
}

Answer.prototype.get = function fn1() {
    return this._val;
}


var dessertAnswer = new Answer(11);
var getDessertAnswer = dessertAnswer.get(); //11


var lifeAnswer = new Answer(3.14);
var getLifeAnswer = lifeAnswer.get();  // 3.14

function FirmAnswer(value) {
    Answer.call(this, value);
}


FirmAnswer.prototype = Object.create(Answer.prototype);


FirmAnswer.prototype.constructor = FirmAnswer;

FirmAnswer.prototype.get = function fn2() {
    return Answer.prototype.get.call(this) + " !";
};

var luckyAnswer = new FirmAnswer(7);

var getLuckyAnswer = luckyAnswer.get();