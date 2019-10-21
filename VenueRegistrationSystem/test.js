const fs =require('fs');
let data = require('./data');
const customer = {
name:"muhamad",
no_phone:1234578,
matric_no:123456
};
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
init
const jsonstring=JSON.stringify(data);

let a=fs.writeFile('./test.json', jsonstring, err => {
    if (err) {
        console.log('Error writing file', err)
    } else {
        console.log('Successfully wrote file')
    }
})

console.log(a);
