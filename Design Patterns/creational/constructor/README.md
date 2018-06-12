# Constructor Pattern
 The Constructor Pattern logic in OOP languages is a special method created newly once we call it to create

 In Javascript we use Objects Constructor to create Specspecific types of objects, Constructor can use to set the values of member properties and methods when the object is first created.

### Define Constructor in different types
The three common ways to create new objects in JavaScript are as follows:

```javascript
// Each of the following options will create a new empty object:
 
var newObject = {};
 
// or
var newObject = Object.create( Object.prototype );
 
// or
var newObject = new Object();

//example from Addyosmani Design Patterns book
 ```
And we can use it in Classes:

 ```javascript
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
//example from MDN
 ```
And we can use constructor objects inside Functions:

 ```javascript
function Car( model, year, miles ) {
 
  this.model = model;
  this.year = year;
  this.miles = miles;
 
  this.toString = function () {
    return this.model + " has done " + this.miles + " miles";
  };
}
// Usage:
 
// We can create new instances of the car
var civic = new Car( "Honda Civic", 2009, 20000 );
var mondeo = new Car( "Ford Mondeo", 2010, 5000 );
 
// and then open our browser console to view the
// output of the toString() method being called on
// these objects
console.log( civic.toString() );
console.log( mondeo.toString() );
//example from Addyosmani Design Patterns book
 ```
So here we talking about concept of Contsructor Pattern is a special method used to initialize a newly created Object once memory has been allocated for it, We create new Objects with new Empty Objects with new `prototype` for every Object.

### Constructors & Prototypes?

When we call a JavaScript constructor to create an object, all the properties of the constructor's prototype are then made available to the new object.

 ```javascript
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName;
};
 ```
We define Constructor Pattern and how it works with different types.