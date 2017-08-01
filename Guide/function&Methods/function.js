/**
 * Created by Amir on 08/07/2017.
 */
function myFunction(a, b) {
    return 42;
}

console.log("myFunction : " + myFunction()); //42

myFunction.foo = "bar";

var myFunction_1 = myFunction;

console.log("Function 1 : " + myFunction_1()); //42


