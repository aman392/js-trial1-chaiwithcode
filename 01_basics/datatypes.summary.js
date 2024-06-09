//pimitive datatypes
//7 string,number,boeolean,null,undefined,symbol,BigInt -callbyvalue

//reference type call by refernces
//array,objects,function

//js  is dynamically typed

const score = 100;
const scorevalue = 100.3;

const isLoggedIn = false;
const outSideTemp = null;

let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id===anotherId);
console.log(id == anotherId);

const bigNumber = 34578n;
console.log(typeof  bigNumber);

const heros = ['shaktiman','nagraj','Hatim','doga'];

let myObj =  {
    namer: "hitesh",
    age:23,
}

console.log(heros);
console.log(myObj);

const myFun = function(){
    console.log("Hello world");
    
}

console.log(typeof myFun);









