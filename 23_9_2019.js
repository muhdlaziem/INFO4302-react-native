// function hoist(){
//     var x=10;
//     let y=101;
// }

// hoist();
// console.log(x); //x is hoisted
// console.log(y);

// function output(){
//    console.log(x);
//    var x = "This is output";
//    console.log(x);

// }

// output();

// console.log(output)
// let output = "This is my output"   // use let as much as possible

// let x
// console.log(x)
// x="this is my second output"

// "use strict";
// console.log(x)
// x="ssadsad"

// var salam = "Salam"
// var times =4

// if(times>3)
// {
//     var salam = "Hi"
// }

// console.log(salam)
// let salam = "say salam"
// salam = "saya faiz"
// console.log(salam)

// let salam1 = "say salam"
// if(salam1){
//     console.log(salam1)
// }
// let salam1 ="adsfds"

// console.log(output)
// var output = "LA"

var output
console.log(output)
output = "LA"

const constant=2;

// var square = new Polygon();
// square.height = 10;
// square.width = 10;
// var foo = new Bar(); // ReferenceError
// console.log(foo.x);

// class Bar {
//     constructor (x = Bar.defaultX) {
//         this.x = x;
//     }
// }
// Bar.defaultX = 0;

hoisted();
function hoisted(){
console.log("My Output!");
}
//
let sum = (x,y) => {return x+y};
console.log(sum(1,2))