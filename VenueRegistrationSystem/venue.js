class venue{

    // constructor(block, floor, unit){
    //     this.block = block;
    //     this.floor = floor;
    //     this.unit = unit;
    // }
    constructor(venueid, block, floor, unit){
        this.venueid = venueid;
        this.block = block;
        this.floor = floor;
        this.unit = unit;
    }
    get toString(){
        return `Venue ID: ${this.venuid},\nBlock: ${this.block},\nFloor: ${this.floor},\nUnit: ${this.unit}.\n`
    }
    get VenueID(){
        return this.venueid;
    }
    
}

module.exports = venue;