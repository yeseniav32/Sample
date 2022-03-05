console.log('// EXERCISE # 1 \\')
let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
    oberwise:"Chocolate",
    dunkin:"Vanilla",
    culvers:"All of them",
    mcDonalds:"Sham-rock-shake",
    cupids_candies:"Chocolate Malt"
    
    }]
    
    }

let favFood = fave =>{
    for (let i = 0; i < Object.keys(person3).length; i++) {
        if(Array.isArray(Object.values(person3)[i])){
            Object.values(person3)[i].forEach(x => console.log(x))    
        }else if(Object.values(person3)[i]){
            console.log(Object.keys(person3)[i], Object.values(person3)[i])
        }
    }
}
favFood(person3)


console.log('// EXERCISE # 2 \\')
// Prototype
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        
    }

    // printInfo method
    printInfo() {
        return `${this.name} is ${this.age} years old.`
    }
    //  addAge method
    addAge(age) {
        age = this.age +=1
        return age
    }
        
}


// let sergio = new Person('Sergio', '34')
// console.log(sergio.printInfo().addAge(age))
// console.log(sergio.printInfo().addAge())


console.log('// EXERCISE # 3 \\')
string = (string) => {
    return new Promise( (resolve, reject) =>{
        if(string.length > 10){
            resolve('Big Word')
        } else{
            reject('Small Word')
        }
    })
}

string('Hello there, stranger!')

.then((result) => {
    console.log(result)
})

.catch((result) => {
    console.log(result)
})


let myArray = ['Ternary', 'Closure', 'Callback','Hoisting']
let itemOne;
let itemTwo;

[itemOne, itemTwo] = myArray

console.log(itemTwo)

