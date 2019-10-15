// import {BMI} from './BMI.mjs';
// import {readline} from 'readline';
const BMI = require('./BMI');

const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

rl.question('Insert your weight: ', (w) => {
// TODO: Log the answer in a database

    rl.question('Insert your height: ', (h) => {
        let myBMI = new BMI(w,h);
        
        // console.log('BMI: ', (((weight) / (height)/(height))*10000).toFixed(2));
        // let res  = ((myBMI.weight) / (myBMI.height)/(myBMI.height))*10000;
        let res = myBMI.BMI;
        console.log(`Your BMI: ${res.toFixed(2)}`);
        console.log(`${myBMI.getStatus}`);
        console.log(`${myBMI.getHeight}`);


        rl.close();

    });
} );