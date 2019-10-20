
const readline = require('readline-sync');
const clear = require('clear'); // Clear Screen Module

function title(){

    console.log(`\n\n============================================\n\n          Venue Reservation System`);
    console.log(`\n============================================`);

}

function menu(){

   console.log('\n          1.Book Venue\n          2.History\n          3.Exit\n');
}

function main(){

    let input;

    do{
    input = parseInt(readline.question("          =")); //Convert String to Integer
    
    switch(input){
        case 1 : clear();title();console.log("\n          This page is to Book venue\n\n");break;
        case 2 : clear();title();console.log("\n          This page is to History\n\n");break;
        case 3 : clear();title();console.log("\n          Exit Program\n\n");break;
        default : clear();title();menu();console.log("          Wrong input ! Try again\n");
    }

    }while(input > 3 || input < 1 )
}

clear();
title();
menu();
main();