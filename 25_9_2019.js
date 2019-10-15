//immutable
// const a;
// console.log(a);
// const salam = "say Salam";
// salam = "say Hello instead";
//syntaxerror: Assignment to constant variable

// const cgpa = 3.5;
// cgpa = 3.5 * 2;      //typeerror
// console.log(cgpa); 
// const pi;
// console.log(pi);
// pi = 3.142;  //syntaxerror

const car = {
    manufacturer : 'Honda',
    year : '2000',
    mileage : '15000'
}  //object

car.owner = 'Ali';

// const colors = ['blue','red','green']; //array
// colors.push('yellow');
// console.log(colors);
// console.log(car);
// colors.pop(); //pop back
// console.log('pop back: '+colors);
// colors.shift();  //pop front
// console.log('pop front: ' + colors);


//function

function hello(){

} //declaration  //hoisted

var hello = function(){};   //expression //not hoisted


//class

var square = new Polygon(); //new -> copy of class
square.height = 10;
square.width = 10;
console.log(square);
// TypeError: Polygon is not a constructor
// need to declare class first before we can use it
class Polygon {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

