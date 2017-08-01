/**
 * Created by Amir on 08/07/2017.
 */
var AnswerPrototype = {
    constructor: function __construct(value) {
        this.val = value
    },
    get: function fn1() {
        return this.val;
    },
    val: 42
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42); // deplication logique + violation de la encapsulation
lifeAnswer.get(); //42


var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(11); // deplication logique + violation de la encapsulation
dessertAnswer.get(); // 11