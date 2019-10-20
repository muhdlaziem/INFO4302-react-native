const venue = require('./venue');
const Book = require('./bookClass')
const moment = require('moment');
const readline = require('readline-sync');
const clear = require('clear'); // Clear Screen Module


let data = require('./data');
let book = require('./book');
let storeBookID=[];


// let hour, minute, day, month;
function title(){

    console.log(`\n\n============================================\n\n          Venue Reservation System`);
    console.log(`\n============================================`);

}

function menu(){

   console.log('\n          1.Book Venue\n          2.History\n          3.Exit\n');
}


function getTimeDate(){
    let now =
    let start = readline.question("Start From?(Format: MM-DD-YYYY H:mm) ");
    let end = readline.question("End?(Format: MM-DD-YYYY H:mm) ");
    if(new Date(start).getHours()>=8 )
    // console.log((new Date(start).getTime()),new Date(end).getTime())
    // console.log(moment(new Date(start).getTime()).format('MM-DD-YYYY H:mm'),moment(new Date(end).getTime()).format('MM-DD-YYYY H:mm'))
    // console.log(data);
    return getAvailableVenue(start,end);
    

}
function getAvailableVenue(start,end){
    start = new Date(start).getTime();
    end = new Date(end).getTime();
    let booked=[];
    for(let i in book){
        if(start>=book[i].Start && end<=book[i].End)
            booked.push(book[i].VenueID);
    }
    console.log(`Booked: ${booked}`);
    console.log('Available Venues: ');
    for(let i in data){
        let isBooked =false;

        for(let j in booked){
            if(data[i].VenueID===booked[j]){
                isBooked= true; break;
            }
        }
        if(!isBooked){
            console.log(`${data[i].VenueID}`);
        }
    }
    return bookVenue(booked,start,end);
}

function bookVenue(booked,start,end){
    console.log(booked);
    let matricno = readline.question('Enter your matric card: ');
    let organization = readline.question('Enter your organization: ')
    let venueid = readline.question('Enter venueid you want to book: ');
    // console.log(booked.includes();
    while(booked.includes(parseInt(venueid))){
        console.log(`This venue has been booked: ${venueid}.`)
        venueid = readline.question('Please enter an available venue you want to book: ');
    }
    book.push(new Book(
        random(),
        parseInt( matricno),
        organization,
        parseInt(venueid),
        start,
        end
    ));
    console.log(book);
    return true;
}
function init(){
    for(let i in data)
        data[i]= new venue(data[i].venueid,
            data[i].block,
            data[i].floor,
            data[i].unit);
    for(let i in book){
        book[i]= new Book(book[i].bookid,
            book[i].matricno,
            book[i].organization,
            book[i].venueid,
            book[i].start,
            book[i].end,);
        storeBookID.push(book[i].venueid);
    }
         
}

function showHistory(){

}
function random() {
    let random = parseInt(Math.random() * (999 - 0) + 0);
    while(storeBookID.includes(random))
        random = parseInt(Math.random() * (999 - 0) + 0);
    return random;
  }

function play(){
    let input;
    init();

    do{
        title();
        menu();
        input = parseInt(readline.question("          >")); //Convert String to Integer
        
        switch(input){
            case 1 : clear();title();console.log("\n          This page is to Book venue\n\n");
            if(getTimeDate())
                console.log('Book succeded!');
            break;
            case 2 : clear();title();console.log("\n          This page is to History\n\n");break;
            case 3 : clear();title();console.log("\n          Exit Program\n\n");break;
            default : clear();title();menu();console.log("          Wrong input ! Try again\n");
        }

    }while(input!==3)
}
play();
