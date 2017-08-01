/**
 * Created by Amir on 08/07/2017.
 */


var myObject = {
    o: 'orange',
    b: 'banane',
    p: "pasteque",
    u: undefined
};

console.log(myObject.u); // u: undefined
console.log(myObject); //Object {o: "orange", b: "banane", p: "pasteque",u: undefined }
delete myObject.u;
console.log(myObject); //Object {o: "orange", b: "banane", p: "pasteque"}

