const readline = require('readline');

const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question('Insert your weight: ', (weight) => {
// TODO: Log the answer in a database

    rl.question('Insert your height: ', (height) => {
        // console.log('BMI: ', (((weight) / (height)/(height))*10000).toFixed(2));
        let res  = ((weight) / (height)/(height))*10000;
        console.log(`Your BMI: ${res.toFixed(2)}`);
        if(res<18.5)
            console.log('You are Underweight');
        else if(res>=18.5 && res<=24.9)
            console.log('You are Normal');
        else if(res>=25 && res<=29.9)
            console.log('You are Overweight');
        else    
            console.log('You are Obese');

        rl.close();

    });
} );