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
        this.score= 0;      //see method chaining
    }       //don't comma seperate inside a class - oh yeah?? we do inside objexts when creating properties
    login(){
        console.log(`${this.username} just logged in`);    //regular function using shorthand notation - arrow function does not bind the value to the keyword
        //see chaining below, this does not specify a return value so results in 'undefined'
        return this;        //now method chaining will work since return is a value and not undefined 
    }               

    logout(){
        console.log(`${this.username} just logged out`);    //regular function using shorthand notation - arrow function does not bind the value to the keyword
        //see chaining below, this does not specify a return value so results in 'undefined'
        return this;        //now method chaining will work since return is a value and not undefined 
    }
    incScore(){
        this.score += 1;
        console.log(`${this.username} has a score of: ${this.score}`);
        //see chaining below, this does not specify a return value so results in 'undefined'
        return this;        //now method chaining will work since return is a value and not undefined 
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
// const userOne= new User('mario', 'mario@rococode.scot');
// const userTwo= new User('luigi', 'luigi@rococode.scot'); //each one (object) is an instance of the user class

// console.log(userOne, userTwo);
    
//#119. Class Methods & Method Chaining - finding the methods
//for using two consecutive methods on one object means two statements:
//userOne.login();  //followed by:
//userTwo.logout();
//if method chaining used at this point - userOne.login(), logout() - would not work because...
//unless funcion specifies 'return', java will assign function result as 'undefined' - oh, I see(?)
// userOne.login().incScore().incScore().logout();
// userTwo.login().incScore().incScore().logout(); 

//#120. Class Inheritance (subclasses)
class Admin extends User{    //Admin sub-class inherits all User properties now add more  properties
 constructor (username, email, title){            //create properties available only to Admin class 
    super(username, email);  //declared otherwise User constructor would not run
    this.title= title;
}
    deleteUser(user){
        //  users = users.filter((u) => {
        //     return u.username != user.username
        //  })
        //can be tidied up as follows:
        users = users.filter(u => u.username != user.username);
    }
}

const userOne= new User('mario', 'mario@rococode.scot');
const userTwo= new User('luigi', 'luigi@rococode.scot'); //each one (object) is an instance of the user class
const userThree= new Admin('roco', 'roco.coding@gmail.com', 'Super Coder');

// console.log(userOne, userTwo, userThree);

// let users= [userOne, userTwo, userThree];
// console.log(users);
// userThree.deleteUser(userTwo);
// console.log(users);

//#121. Super( ) - class constructor for additional properties
console.log(userThree);
