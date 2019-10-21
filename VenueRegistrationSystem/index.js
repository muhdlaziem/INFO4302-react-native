const venue = require('./venue');
const Book = require('./bookClass')
const User = require('./user')
const moment = require('moment');
const readline = require('readline-sync');
const sleep = require('sleep');
const clear = require('clear'); // Clear Screen Module
const fs =require('fs');



let data = require('./data');
let book = require('./book');
let storeBookID=[];
let storeVenueID=[];

// let hour, minute, day, month;
function title(){

    console.log(`\n\n\t\t\t\t\t============================================\n\n          \t\t\t\t\tVenue Reservation System`);
    console.log(`\n\t\t\t\t\t============================================`);

}

function menu(){

   console.log('\n          \t\t\t\t\t1.Book Venue\n          \t\t\t\t\t2.History\n          \t\t\t\t\t3.Exit\n');
}


function getTimeDate(){
    let date = readline.question("\t\t\t\t\tOn what date ?(Format: MM-DD-YYYY): " )
    let start = readline.question("\t\t\t\t\tStart From?(H:mm (24-Hours)): ");
    let end = readline.question("\t\t\t\t\tEnd?(H:mm (24-Hours)): ");
    let mergeStart = `${date} ${start}`;
    let mergeEnd = `${date} ${end}`;

    // console.log(new Date(mergeStart).getHours(),new Date(mergeEnd).getHours())
    while(!(new Date(mergeStart).getHours()>=8 && new Date(mergeEnd).getHours()<=17)){
        console.log('\t\t\t\t\tThis period is not available.\n');
        date = readline.question("\t\t\t\t\tOn what date ?(Format: MM-DD-YYYY): " )
        start = readline.question("\t\t\t\t\tStart From?(H:mm (24-Hours)): ");
        end = readline.question("\t\t\t\t\tEnd?(H:mm (24-Hours)): ");
        mergeStart = `${date} ${start}`;
        mergeEnd = `${date} ${end}`;
    }
    // console.log((new Date(start).getTime()),new Date(end).getTime())
    // console.log(moment(new Date(start).getTime()).format('MM-DD-YYYY H:mm'),moment(new Date(end).getTime()).format('MM-DD-YYYY H:mm'))
    // console.log(data);
    return getAvailableVenue(mergeStart, mergeEnd);
    

}
function getAvailableVenue(start,end){
    start = new Date(start).getTime();
    end = new Date(end).getTime();
    let booked=[];
    for(let i in book){
        if((start>=book[i].Start && end<=book[i].End) ||
        (start>=book[i].Start && start<=book[i].End) || 
        (end>=book[i].Start && end<=book[i].End))
            booked.push(book[i].VenueID);
    }
    // console.log(`Booked: ${booked}`);
    let available=[]
    for(let i in data){
        let isBooked =false;

        for(let j in booked){
            if(data[i].VenueID===booked[j]){
                isBooked= true; break;
            }
        }
        if(!isBooked){
            available.push(data[i].VenueID);
        }
    }
    clear();
    console.log(`\t\t\t\t\tThere are ${available.length} available venue(s): \n`);

    // console.log(available,available.length)
    if (available.length) {
      
        console.log("\t\t\t\t\tVenue ID Block\tFloor\tUnit");
        console.log("\t\t\t\t\t-------- -----\t-----\t----")
        for( let i in available){
            for( let j in data){
                // console.log(i,data[j].VenueID);
                if(available[i]==data[j].VenueID)
                    console.log(`\t\t\t\t\t${data[j].VenueID}\t ${data[j].BlockNo}\t${data[j].FloorNo}\t${data[j].UnitNo}`);
            }
        }

    }
    else{
        console.log('\t\t\t\t\tThere is No Available Venue Currently!');
    }
    return bookVenue(booked,start,end);
}

function bookVenue(booked,start,end){
    // console.log(booked);
    let matricno = readline.question('\n\t\t\t\t\tEnter your matric card: ');
    let organization = readline.question('\t\t\t\t\tEnter your organization: ')
    let venueid = readline.question('\t\t\t\t\tEnter venueid you want to book: ');
    // console.log(booked.includes();
    while(booked.includes(parseInt(venueid))){
        console.log(`\n\t\t\t\t\tThis venue has been booked: ${venueid}.`)
        venueid = readline.question('\t\t\t\t\tPlease enter an available venue you want to book: ');
    }

    book.push(new Book(
        random(),
        parseInt( matricno),
        organization,
        parseInt(venueid),
        start,
        end
    ));
    let jsonstring=JSON.stringify(book);

    let a=fs.writeFile('./book.json', jsonstring, err => {
        if (err) {
            console.log('\t\t\t\t\t\tError writing file', err)
        } else {
            console.log('\t\t\t\t\t\tSuccessfully wrote file')
        }
    })

    // console.log(book);
    return true;
}
function init(){
    for(let i in data){
        data[i]= new venue(data[i].venueid,
            data[i].block,
            data[i].floor,
            data[i].unit);
        
        storeVenueID.push(data[i].venueid);
    }
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
function titlehistory(){

    console.log('\n\n\t\t\t\t\t====================================\n\n          \t\t\t\t\tBooking History');
    console.log('\n\t\t\t\t\t====================================\n');

}


function showHistory(){
    console.log('\n');
    console.log('Book ID\t\tOrganization\t\tVenue ID\tStart Date      \tEnd Date        \tBooked by');
    console.log('=======\t\t============\t\t========\t================\t================\t=========');
    for(let i in book){
        console.log(book[i].BookID
        + '\t\t' + book[i].Organization
        + '\t\t\t' + book[i].VenueID
        + '\t\t' + moment(new Date(book[i].Start).getTime()).format('MM-DD-YYYY H:mm')
        + ' \t' + moment(new Date(book[i].End).getTime()).format('MM-DD-YYYY H:mm')
        + '\t' + book[i].MatricNO);
       
    }
    input = parseInt(readline.question("\n\n\t\t\t\t     >(Press ENTER to back to the main screen)"));
    return input;
}

function random() {
    let random = parseInt(Math.random() * (30 - 0) + 0);
    while(storeBookID.includes(random))
        random = parseInt(Math.random() * (999 - 0) + 0);
    return random;
  }

function play(){
    let input;
    init();

    do{
        clear();
        title();
        menu();
        input = parseInt(readline.question("          \t\t\t\t\t>")); //Convert String to Integer
        
        switch(input){
            case 1 : clear();title();console.log("\n\t\t\t\t\t       This page is to Book venue\n\n");
            if(getTimeDate())
                console.log('\t\t\t\t\tBook succeded!');
            sleep.sleep(2);break;
            case 2 : clear();titlehistory();let hist = showHistory();break;
            case 3 : clear();title();console.log("\n      \t\t\t\t\t\tExit Program\n\n");break;
            default : clear();title();menu();console.log("          \t\t\t\t\t\tWrong input ! Try again\n");
        }

    }while(input!==3)
}
play();
