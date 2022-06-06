// AutoBoxing:-Boxing is wrapping a primitive value in an Object. When you treat a primitive 
// type like if it were an object, e.g., calling to the toLowerCase function, JavaScript would wrap 
// the primitive type into the corresponding object

const name = "KESK";
let lowerCase = name.toLowerCase();//kesk
let subValue = name.substring(1);//ESK

console.log('lowerCase',lowerCase);
console.log('subValue',subValue);

var sp = 'abc';              // string primitive
var so = new String( sp ); // string object

console.log('so', so);

// Unboxing:-The easiest way to obtain the underlying primitive value from an object wrapper is to 
// use the valueOf() method:..object convert into primitive value...

const a = Object(false);
a == false; //true
a === false //false
let val = a.valueOf() == false //true
let val1 = a.valueOf() === false //true

console.log('val',val,'val1',val1);
