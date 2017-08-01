/**
 * Created by Amir on 08/07/2017.
 */
/**
 * @var Object
 * @type {{a: undefined, b: null, c: boolean, d: string, e: number}}
 */
var object = {
    a: undefined,
    b: null,
    c: true,
    d: 'foo',
    e: 3.14
};

//console.log(object);


/**
 *  INITILISATION  VALUE & OBJECT
 */


// VALUES
var number1, number2;

number1 = 3.14;
console.log("number 1 : " + number1 + " number 2 befor initialisation  : " + number2);

number2 = number1;
console.log("number 1 : " + number1 + " number 2 : " + number2);

number2 = 42;
console.log("number 1 : " + number1 + " number 2 after initialisation : " + number2);


// OBJECTS

var object_1, object_2;

object_1 = {
    a: 3.14,
};

object_2 = object_1;

console.log("object 1 : " + object_1 + " object_2 : " + object_2);
console.log(object_1 );

object_2.a = 22;
console.log(object_2 );
