/**
 * Created by Amir on 08/07/2017.
 */

/** LES TYPES JAVASCRIPT **/

// PRIMITIVE TYPES

/**
 * @var und
 * @type {undefined}
 */
var und = undefined;
/**
 * @var nullable
 * @type {null}
 */
var nullable = null;
/**
 * @var boolean
 * @type {boolean}
 */
var boolean = true;
/**
 * @var string
 * @type {string}
 */
var string = "foo";

/**
 * @var number
 * @type {number}
 */
var number = 3.14;

/**
 * @var object
 * @type {{fist_name: string, last_name: string}}
 */
var object = {
    fist_name: 'doe',
    last_name: 'John'
};


// SPECIAL TYPE

/**
 *
 * @param x
 * @param y
 * @returns {*}
 */
function somme(x, y) {
    return x + y;
}
console.log(somme(5, 6));

/**
 * @var array_t
 * @type {[*]}
 */
var array_t = ['id', 20];

/**
 * @var regex
 * @type {RegExp}
 */
var regex = /piyo/;


