class Book{
    constructor(bookid,matricno,organization,venueid,start,end){
        this.bookid = bookid;
        this.matricno = matricno;
        this.organization = organization;
        this.venueid = venueid;
        this.start = start;
        this.end = end;
    }
    get Start(){
        return this.start;
    }
    get End(){
        return this.end;
    }
    get VenueID(){
        return this.venueid;
    }
}   
module.exports = Book;