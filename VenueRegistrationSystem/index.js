const venue = require('./venue');
const Book = require('./bookClass')
const moment = require('moment');
const readline = require('readline-sync');

let data = require('./data');
let book = require('./book');


// let hour, minute, day, month;
function getTimeDate(){

    let start = readline.question("Start From?(Format: MM-DD-YYYY H:mm) ");
    let end = readline.question("End?(Format: MM-DD-YYYY H:mm) ");
    // console.log((new Date(start).getTime()),new Date(end).getTime())
    // console.log(moment(new Date(start).getTime()).format('MM-DD-YYYY H:mm'),moment(new Date(end).getTime()).format('MM-DD-YYYY H:mm'))
    // console.log(data);
    getAvailableVenue(start,end);
    

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
            if(data[i].VenueID==booked[j]){
                isBooked= true; break;
            }
        }
        if(!isBooked){
            console.log(`${data[i].VenueID}`);
        }
    }

}
function toClass(){
    for(let i in data)
        data[i]= new venue(data[i].venueid,
            data[i].block,
            data[i].floor,
            data[i].unit);
    for(let i in book)
        book[i]= new Book(book[i].bookid,
            book[i].matricno,
            book[i].organization,
            book[i].venueid,
            book[i].start,
            book[i].end,);
}


function play(){
    while(true){
        toClass();
        getTimeDate();
        // console.log(book[0].Start,data[0].VenueID);
       break;
    }
}
play();
