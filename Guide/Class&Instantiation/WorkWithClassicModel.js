/**
 * Created by Amir on 12/07/2017.
 */

/**
 *  WORK WITH CLASSICAL MODEL 
 *  WITHOUT PROTOTYPE 
 */


// In javascript :  this class and fonction is declared with a constructor method 

 

function Answer (value) {
    this._val  = value; 
}

Answer.prototype.get =  function fn1(){
    return this._val;
}

/** dessertAnswer instance de la class Answer */
var dessertAnswer = new Answer(11); 
var getDessertAnswer = dessertAnswer.get(); //11

/** lifeAnswer instance de la class Answer */
var lifeAnswer = new Answer(3.14);  
var getLifeAnswer =  lifeAnswer.get();  // 3.14

function FirmAnswer(value){
    Answer.call(this,value);
}
 
/**
 * on creer un object prototype a partir de la fonction Answer Telque 
 * Result like this: 
 * Answer {}
 * __proto__  : Object
 * get : function fn1()
 * constructor : function Answer(value)
 * __proto__ : Object
 */

FirmAnswer.prototype = Object.create(Answer.prototype);

// le constructeur n'est pas necaissaire a declarer en javascript 
FirmAnswer.prototype.constructor = FirmAnswer ; 

FirmAnswer.prototype.get = function fn2(){
    return Answer.prototype.get.call(this) +  " !";
};

var luckyAnswer = new FirmAnswer(7);

var getLuckyAnswer = luckyAnswer.get(); 



 console.log(getLuckyAnswer);