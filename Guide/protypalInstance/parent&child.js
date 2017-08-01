/**
 * Created by Amir on 08/07/2017.
 */

var parent = {
    get: function fn() {
        return this.val;
    },
    val: 42
};

child.val = 11;

/** @var child herite de parent **/
var child = Object.create(parent);

/** @var grandChild herite de child **/
var grandChild = Object.create(child);


console.log("Parent : " + parent.get()); // 42
console.log("Child : " + child.get()); // 11
console.log("Grand Child : " + grandChild.get()); // 11