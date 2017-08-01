 
class Answer {
    constructor(value) {
        this._val = value;
    }
    get() {
        return this._val;
    }
}

var lifeAnswer = new Answer(42);
var getLifeAnswer = lifeAnswer.get(); //42 

var dessertAnswer = new Answer(3.14);
var getDessertAnswer = dessertAnswer.get(); //3.14


class FirmAnswer extends Answer {
    constructor(value) {
        super(value);
    }

    get() {
        return super() + " !!";
    }
}

var luckeyAnswer = new FirmAnswer(7);
var getLuckyAnswer = luckeyAnswer.get();

console.log(" getLuckyAnswer : " + getLuckyAnswer);

