# Factory Pattern
 The Factory Pattern is create any types number of Objects & Functions and Components based on constructor Objects & Functions and Components.

### Benefits of Using Factories
 Factories are much more flexible than either constructor functions or classes, and they don’t lead people down the wrong path by tempting them with the `extends` keyword and deep inheritance hierarchies. You can inherit from factory functions using a variety of techniques.

 By using Factory Pattern we save our code from repeat our instance so we can use same instance structure or type but not repeat it or create another one.

 Examples:

```javascript

const Animal = function(name){
    const animal = {};
    animal.name = name;
    animal.walk = function(){
        console.log(this.name + " walks");
    }
    return animal;
};

 ```
and then we can do this:

 ```javascript
const poo = Animal("poo");
const tommy = Animal("tommy");
poo.walk() // poo walks
tommy.walk() // tommy walks
 ```
As you can see we just call the function Animal and both times it gives us a new animal instance.

But these animals our fairly limited in functionality. They can just walk right now. What should we do to add functionality in these animals.

Another Example ES6:

 ```javascript 
 
//Definition of class
class User {
    constructor(typeOfUser){
        this._canEditEverything = false;
        if (typeOfUser === "administrator") {               
            this._canEditEverything = true;
        }
    }
    get canEditEverything() { return this._canEditEverything; }
}
//Instatiation
let u1 = new User("normalGuy");
let u2 = new User("administrator");
 
 ```
Factory Method defines one method, createThing for instance, which is overriden by subclasses who decide what to return. The Factories and Products must conform to interfaces for clients to be able to use them.

### Why Factory?

1. Return any arbitrary object and use any arbitrary prototype
For example, you can easily create various types of objects which implement the same API, e.g., a media player that can instantiate players for multiple types of video content which use different APIs under the hood, or an event library which can emit DOM events or web socket events.

Factories can also instantiate objects across execution contexts, take advantage of object pools, and allow for more flexible prototypal inheritance models.

2. No refactoring worries
You’d never have a need to convert from a factory to a constructor, so refactoring will never be an issue.

3. No `new`
No ambiguity about using `new`. Don’t. (It will make `this` behave badly, see next point).

4. Standard `this` behavior
`this` behaves as it normally would, so you can use it to access the parent object. For example, inside `player.create()`, `this` refers to player, just like any other method invocation would. `call()` and `apply()` also reassign `this` as expected.

5. No deceptive `instanceof`
6. Some people like the way `myFoo = createFoo()` reads.

### Drawbacks of Factories

1. Doesn’t create a link from the instance to `Factory.prototype` — but this is actually a good thing because you won’t get a deceptive `instanceof`. Instead, `instanceof` will always fail. See benefits.

2. `this` doesn’t refer to the new object inside the factory. See benefits.

3. It may perform slower than a constructor function in micro-optimization benchmarks. Be sure to test in the context of your app if this is a concern for you.


### Also There is Abstract Factories:
The Abstract Factory Pattern provides an interface for creating families of related or dependent objects without specifying their concrete classes.

An Abstract Factory should be used where a system must be independent from the way the objects it creates are generated or it needs to work with multiple types of objects.