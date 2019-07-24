/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. when a function is in the global scope, the value of this in the function is the window object
* 2. Implicit is when an object is called with a ., this is whatever comes before the .
* 3. in a constructor, this refers to the specific object that is created with the constructor function
* 4. when .call, .apply., or .bind is used, they explicitly state what this refers to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayHi(name) {

    console.log('Hiya ' + name);
    
    console.log(this);
}

sayHi('Andrew');


// Principle 2

// code example for Implicit Binding
const sayYo = {

    greeting: 'Yo',
    say: function(name) {
        console.log(this.greeting +' ' + name +'!');
        console.log(this);
    }
}
sayYo.say('Andrew');

// Principle 3

// code example for New Binding
function SayHeya(name) {
    this.greeting = 'Heya ';
    this.name = name;
    this.speak = function() {
        console.log(`${this.greeting}, ${this.name}!`)
        console.log(this);
    }
}

let greetAndrew = new SayHeya('Andrew');
let greetStrider = new SayHeya('Strider');

greetAndrew.speak();
greetStrider.speak();

// Principle 4

// code example for Explicit Binding

greetAndrew.speak.call(greetStrider);
greetStrider.speak.call(greetAndrew);