/**
 * Created by Amir on 08/07/2017.
 */

var myObject = {
    get: function myMethod() {
        return this.val;
    },
    val: 42,
};

console.log('myObject get ' + myObject.get()); // 42

function myExternalMethod() {
    return this.val;
}


var object_1 = {
    get: myExternalMethod,
    val: 42
};
var object_2 = {
    get: myExternalMethod,
    val: 11
};

console.log(
    "Object 1 get : " + object_1.get(), //42
    "Object 2 get : " + object_2.get() //11
);


console.log("Method call : " + myExternalMethod.call(object_1)); // 42