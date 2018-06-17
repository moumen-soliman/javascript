# Decorator Pattern
 Decorator pattern lets you dynamically change the behavior of an object at run time by wrapping them in an object of a decorator class.

 In object-oriented programming, the decorator pattern is a design pattern that allows behavior to be added to an individual object, either statically or dynamically, without affecting the behavior of other objects from the same class. The decorator pattern is often useful for adhering to the Single Responsibility Principle, as it allows functionality to be divided between classes with unique areas of concern.

 Example:
```js
function Pasta() {
    this.price = 0;
}
Pasta.prototype.getPrice = function() {
    return this.price;
};

function Penne() {
    this.price = 8;
}
Penne.prototype = Object.create(Pasta.prototype);


function SauceDecorator(pasta) {
    this.pasta = pasta;
}

SauceDecorator.prototype.getPrice = function() {
    return this.pasta.getPrice() + 5;
};

function CheeseDecorator(pasta) {
    this.pasta = pasta;
}

CheeseDecorator.prototype.getPrice = function() {
    return this.pasta.getPrice() + 3;
};

module.exports = [Penne, SauceDecorator, CheeseDecorator];
```
The Decorator pattern isn't heavily tied to how objects are created but instead focuses on the problem of extending their functionality. Rather than just relying on prototypal inheritance, we work with a single base object and progressively add decorator objects which provide the additional capabilities. The idea is that rather than sub-classing, we add (decorate) properties or methods to a base object so it's a little more streamlined.