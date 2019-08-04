//Question 1:

function Animal(){
    this.animalName = 'Lussy';
    this.type = 'Dog';
    this.getAnimalName = function(){
        return console.log(this.animalName);
    }
    this.createElement = function(){
        // return $('body').append(`${this.type}`);
    }
}
var dog = new Animal();
dog.getAnimalName();
dog.createElement();


//Question 2:

class Shape{
    constructor(){
        this.height = '13CM';
        this.length = '12CM';
        this.area = '256CM2';
    }
    getteArea=()=>{
        return console.log(`${this.area}`)
    }
}
let circle = new Shape();
circle.getteArea();


//Question 3:

filters = (array) =>{
    let newArr = array.filter(x =>{
        return x.length <= 4
    })
return newArr;
}
console.log(filters(['Food','Pasta','Pizza','Eat']));