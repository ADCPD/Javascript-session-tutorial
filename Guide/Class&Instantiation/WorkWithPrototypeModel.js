/**
 * Created by Amir on 12/07/2017.
 * 
 *  WORK WITH PROTOTYPE MODEL 
 *    
 */

var AnswerPrototype = {
    constructor: function fn0(value) {
        this._val = value
    },
    get: function fn1() {
        return this._val;
    },
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(12);
var getLifeAnswer = lifeAnswer.get(); //12 

console.log("getLifeAnswer() : " + getLifeAnswer);

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14);
var getDessertAnswer = dessertAnswer.get(); //3.14

console.log("getDessertAnswer() : " + getDessertAnswer);


var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function fn2() {
    return AnswerPrototype.get.call(this) + " !!";
};

var lackyAnswer = Object.create(FirmAnswerPrototype);
lackyAnswer.constructor(7);
var getLuckyAnswer = lackyAnswer.get();

console.log("getLuckyAnswer() : " + getLuckyAnswer);

var magicAnswer = Object.create(FirmAnswerPrototype);
magicAnswer.constructor(3);
var getMagicAnswer = magicAnswer.get();
console.log("getMagicAnswer() : " + getMagicAnswer);