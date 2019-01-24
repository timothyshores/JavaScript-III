/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or Gloabal Binding refers to the global object which in the browser is window and in Node.js it is the global object.
* 2. Implicit binding - this refers to the object that is executing the current
function
* 3. New Binding - When used in a constructor function, a function that creates objects, this refers to the object that is being created and returned by the constructor function
* 4. Explicit Binding - when using .call, .apply or .bind it refers to the object that is being passed as an arguement

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

const eminem = {
    name: 'Slim Shady',
    greet() {
        return `Hi! My name is what? My name is who? My name is ${this.name}`;
    }
};

console.log(eminem.greet());

// Principle 3

// code example for New Binding
function SoundCloudRapper(name) {
    this.rap = function () {
        return `Yo this is Lil ${name}`;
    };
}

const yachty = new SoundCloudRapper('Yachty');
console.log(yachty.rap());

// Principle 4

// code example for Explicit Binding

function normalGreeting() {
    return `Hello, my name is ${this.name}`;
}

const user = {
    name: 'Tim',
}
console.log(normalGreeting.call(user));