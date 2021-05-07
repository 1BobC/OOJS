// Section 15 Object oriented javascript
//#115. What is OOP?
//code used in console to find object and methods

//const names= ['Bob', 'June']
//names
//const ages= new Array(12, 23, 58, 105)
//ages

//const user1= {}
//userOne
//const userTwo= new Array()
//userTwo

//Not everything in OOJS is an object - oh really!
//What are not objects? strings, numbers, boolean, nodes, undefined - all primitive types
//Check out this...
//const name= 'mario' - a primitive string
//name returns "mario", in double quotes and no expandable - but -
//name.length returns 5, and
//name.toUpperCase() returns "MARIO" because - J temporarily wraps primitive type in an Object wrapper
//which holds the Object properties and methods - Then it unwraps leaving the primitive clever eh!

//OK so far?
//const nameTwo = new String('Finn'); primitive Finn is wrapped in a String object
//nameTwo returns the string object and properties and methods - yes it does!
//Same with all the other primitive types
//Therefore 'everything' will behave like an object

//#116. Object Literal Recap and creation of objects
// const userOne= {
//     username: 'freya',
//     email: 'freya@rococode.scot',
//     login(){
//         console.log('The user is logged in');
//     },
//     logout(){
//         console.log('The user is logged out');
//     }
// };
// const userTwo= {
//     username: 'finn',
//     email: 'finn@rococode.scot',
//     login(){
//         console.log('The user is logged in');
//     },
//     logout(){
//         console.log('The user is logged out');
//     }
// };
// console.log(userOne.email, userOne.username);
// userOne.login();
// console.log(userTwo.email, userTwo.username);
// userTwo.login();
// const userThree= new userOne('bob@rococode.scot', 'bobC');

//#117. Classes
//use code below instead of 10 lines to create user object - cool
//can do with proto type model - no, do it later 
//or do it now with class (like a blueprint)

//constructor function
class User {
    constructor(username, email){          //for different usernames add (username)
        //set up object properties
        this.username= username;
        this.email= email;
    }       //don't comma seperate inside a class - oh yeah?? we do inside objexts when creating properties
    login(){
        console.log(`${this.username} just logged in`);    //regular function using shorthand notation - arrow function does not bind the value to the keyword
    }
}
//the new keyword
//1 - it creates a new empty object {}
//2 - it binds the value of 'this' to the new empty object
//3 - it calls the constructor function to build the object 
//4 - properties have been created but not methods 
// const userOne= new User();   //Notice anything? userOne and UserTwo are the same!!
// const userTwo= new User();   //So see below how to avoid creating identical objects

//#118. Class constructors
const userOne= new User('mario', 'mario@rococode.scot');
const userTwo= new User('luigi', 'luigi@rococode.scot'); //each one (object) is an instance of the user class

console.log(userOne, userTwo);
userOne.login();
userTwo.login();     
//#119. Class Methods & Method Chaining - finding the methods