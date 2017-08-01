/**
 * Created by Amir on 08/07/2017.
 */


var answer = {
    get: function fn1() {
        return this.val;
    },
    val: 42
};


console.log('answer.get : ' + answer.get());  // integer 42


// polymorfisme  : same name object with same proprieties  and different methods

var firstAnswer = Object.create(answer);
firstAnswer.val = 11;
firstAnswer.get = function fn2() {
    // return this.val + '!!';
    // return answer.get() + '!!'; // string : 42 !!
    return answer.get.call(this) + ' !! '; // 11
};

console.log('firstAnswer.get : ' + firstAnswer.get());  // string : 42 !!