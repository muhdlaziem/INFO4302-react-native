class Book{
    constructor(bookid,matricno,organization,venueid,start,end){
        this.bookid = bookid;
        this.matricno = matricno;
        this.organization = organization;
        this.venueid = venueid;
        this.start = start;
        this.end = end;
    }

    //get
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

    //set
    set BookID(bookid){
        this.bookid = bookid;
    }
    set MatricNO(matricno){
        this.matricno = matricno;
    }
    set Organization(organization){
        this.organization = organization;
    }
    set VenueID(venueid){
        this.venueid = venueid;
    }
    set Start(start){
        this.start = start;
    }
    set End(end){
        this.end = end;
    }
}   
module.exports = Book;