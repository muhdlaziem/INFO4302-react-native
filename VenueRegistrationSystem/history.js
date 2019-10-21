const moment = require('moment');
let book = require('./book');

class Book{
    constructor(bookid,matricno,organization,venueid,start,end){
        this.bookid = bookid;
        this.matricno = matricno;
        this.organization = organization;
        this.venueid = venueid;
        this.start = start;
        this.end = end;
    }
    get BookID(){
        return this.bookid;
    }
    get MatricNO(){
        return this.matricno;
    }
    get Organization(){
        return this.organization;
    }
    get VenueID(){
        return this.venueid;
    }
    get Start(){
        return this.start;
    }
    get End(){
        return this.end;
    }
    }

    function init(){
        for(let i in book){
            book[i]= new Book(book[i].bookid,
                book[i].matricno,
                book[i].organization,
                book[i].venueid,
                book[i].start,
                book[i].end,);
        }
             
    }

    init()

    function titlehistory(){

        console.log('\n\n====================================\n\n          Booking History');
        console.log('\n====================================\n');
    
    }

    titlehistory()

    function showHistory(){
        for(let i in book){
            console.log('\nBook ID    Organization    Venue ID      Start Date          End Date'),
            console.log('=======    ============    ========    ===============    ==============='),
            console.log('   ' + book[i].BookID
            + '          ' + book[i].Organization
            + '          ' + book[i].VenueID
            + '       ' + moment(new Date(book[i].Start).getTime()).format('MM-DD-YYYY H:mm')
            + '    ' + moment(new Date(book[i].End).getTime()).format('MM-DD-YYYY H:mm'))
            break;
        }
    }

    showHistory()