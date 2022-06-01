//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

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
for (let [key,value] of Object.entries(person3)){
    if (typeof value ==='string'){
    console.log(value)
    }   
    
    else if (Array.isArray(value)  === true && value.length >1){
            console.log(value.join(', \n'))
    }
    else {
        value = value[0]    
        console.log(Object.values(value))
        
    }
    
}

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age){
    this.name = name
    this.age = age
// Use an arrow to create the printInfo method
    this.printInfo = () =>{
        console.log(`This person is named ${ name } and they are ${ age } years old.`)
    }
// Create another arrow function for the addAge method that takes a single parameter
    this.addAge = (age) => {
        this.age ++
        console.log(`${this.name} has grown older, now ${this.age} years old.`)
    }

}
let a = new Person('Tyler',30)
let b = new Person('Shelby',29)


// Adding to the age 
a.printInfo()
b.printInfo()
a.addAge()
a.addAge()
a.addAge()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
let is10Bigger = word =>{
    return new Promise((resolve,reject) => {
        if(word.length>10){
            resolve(word);
        }
        else{
            reject(word);
        }
    })
}

//when I call a function returning a promise I want chanin two other method calls off the back
// .then() method represents resolving the promise
// .catch() method represents rejecting the promise
is10Bigger('supercalifragilisticexpialidocious').then((result)=>{console.log(`${result} is a big word!`)}).catch((result)=> {console.log(`${result} is not a big word`)})