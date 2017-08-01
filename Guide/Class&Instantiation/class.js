/**
 * Created by Amir on 08/07/2017.
 */

/**
 * Class AnswerPrototype
 * @type {{get: AnswerPrototype.fn1, val: number}}
 */
var AnswerPrototype = {
    get: function fn1() {
        return this.val;
    },
    val: 42
};

AnswerPrototype.get(); //42

/**
 * Instances
 * dessertAnswer & lifeAnswer : herite de AnswerPrototype
 * magicAnswer & luckyAnswer : herite de firmAnswerPrototype
 * */

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.val = 42; // deplication logique + violation de la encapsulation
lifeAnswer.get(); //42


var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.val = 11; // deplication logique + violation de la encapsulation
dessertAnswer.get(); // 11

/**
 * firmAnswerPrototype herite de AnswerPrototype
 * firmAnswerPrototype est une subclass de AnswerPrototype
 * */
var firmAnswerPrototype = Object.create(AnswerPrototype);
firmAnswerPrototype.get = function fn2() {
    return AnswerPrototype.get.call(this) + "!!";
};


var luckyAnswer = Object.create(firmAnswerPrototype);
luckyAnswer.val = 7; // deplication logique + violation de la encapsulation
luckyAnswer.get(); // 7 !!

var magicAnswer = Object.create(firmAnswerPrototype);
magicAnswer.val = 3; // deplication logique + violation de la encapsulation

magicAnswer.get(); // 3 !!