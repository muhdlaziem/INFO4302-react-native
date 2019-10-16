class BMI {
    constructor(weight,height){
        this.weight = weight;
        this.height = height;

    }
    get getWeight(){
        return this.weight;
    }
    set setWeight(weight){
        this.weight = weight;
    }
    get getHeight(){
        return this.height;
    }
    set setHeight(height){
       this.height = height;
    }
    get getBMI(){
        return ((this.weight) / (this.height)/(this.height))*10000;
    }
    get getStatus(){
        if(this.BMI<18.5)
            return 'You are Underweight';
        else if(this.BMI>=18.5 && this.BMI<=24.9)
            return 'You are Normal';
        else if(this.BMI>=25 && this.BMI<=29.9)
            return 'You are Overweight';
        else    
            return 'You are The Best';
    }
}
// export {BMI};
module.exports = BMI;
