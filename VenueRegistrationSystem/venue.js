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

    //get
    get toString(){
        return `Venue ID: ${this.venuid},\nBlock: ${this.block},\nFloor: ${this.floor},\nUnit: ${this.unit}.\n`
    }
    get VenueID(){
        return this.venueid;
    }
    get BlockNo(){
        return this.block;
    }
    get FloorNo(){
        return this.floor;
    }
    get UnitNo(){
        return this.unit;
    }

    //set
    set VenueID(venueid){
        this.venueid = venueid;
    }
    set BlockNo(block){
        this.block = block;
    }
    set FloorNo(floor){
        this.floor = floor;
    }
    set UnitNo(unit){
        this.unit = unit;
    }
}

module.exports = venue;