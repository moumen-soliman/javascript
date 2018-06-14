# Singleton Pattern
 The Singleton is part of the creational design pattern category which deals with object creation. The main idea of this design pattern is to ensure that a class has only, and only one, instance of itself, providing a global point of access to it.

 In other words, we could say that the singleton is a pattern where a class has only one instance.

 Singleton Es5 Example:

 ```javascript
    function Person() {

        if(typeof Person.instance === 'object')
            return Person.instance;
        
        //one instance
        Person.instance = this;

        return this;
    }

    module.exports = Person;

 ```
ES6 Example:

```javascript
class Person {
    constructor() {
        if (typeof Person.instance === 'object') {
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }
}

export default Person;

```
 In JavaScript, Singletons serve as a shared resource namespace which isolate implementation code from the global namespace so as to provide a single point of access for functions.

### When to Use a Singleton Class?
There is no straightforward answer to this question. A scenario which is acceptable to some will be unacceptable to others.

However, it is commonly accepted that the singleton can yield best results in a situation where various parts of an application concurrently try to access a shared resource. An example of a shared resource would be Logger, Print Spooler, etc.

The following points are suggested to be considered while designing a singleton class:

1. Singleton classes must be memory-leak free. The instance of the singleton class is to be created once and it remains for the lifetime of the application.

2. A real singleton class is not easily extensible.

3. Derive the singleton class from an interface. This helps while doing unit testing (using Dependency Injection).

So you save your app from memory leak + you create a spesific instance you can inherit from it by using factory method without any negative effects.