# Flyweight Pattern
 In project we can found similar objects and classes and that's effect directly in memory size with increase in memory size, It is used to minimize memory usage or computational expenses by sharing as much as possible with similar objects.

 > 📜 From Wikipedia
 >
 >In computer programming, flyweight is a software design pattern. A flyweight is an object that minimizes memory use by sharing as much data as possible with other similar objects it is a way to use objects in large numbers when a simple repeated representation would use an unacceptable amount of memory.
 
 Example:

```js
function Color(name) {
    this.name = name;
}

//create new instance inside function
var colorFactory = {
    colors: {},
    create: function(name) {
        var color = this.colors[name];
        if(color) return color;

        this.colors[name] = new Color(name);
        return this.colors[name];
    }
};

module.exports = colorFactory;
```
For this application, there are a few more concepts around the classical Flyweight pattern that we need to be aware of. In the Flyweight pattern there's a concept of two states - intrinsic and extrinsic. Intrinsic information may be required by internal methods in our objects which they absolutely cannot function without. Extrinsic information can however be removed and stored externally.

We can see the simple set of fields in the following code:

```js
var Soldier = (function () {
    function Soldier() {
    this.Health = 10;
    this.FightingAbility = 5;
    this.Hunger = 0;
}
return Soldier;
})();
```
Of course, with an army of 10,000 soldiers, keeping track of all of this requires quite some memory. Let's take a different approach and use prototypes:
```js
var Soldier = (function () {
    function Soldier() { }
    Soldier.prototype.Health = 10;
    Soldier.prototype.FightingAbility = 5;
    Soldier.prototype.Hunger = 0;
    return Soldier;s
})();
```
Using this approach, we are able to defer all requests for the soldier's health to the prototype. 

Setting the value is easy too, as shown in the following code:
```js
var soldier1 = new Soldier();
var soldier2 = new Soldier();
console.log(soldier1.Health);
soldier1.Health = 7;
console.log(soldier1.Health);
console.log(soldier2.Health);
delete soldier1.Health;
console.log(soldier1.Health);
//10
//7
//10
//10
```
You'll note that we make a call to remove the property override and return the value
back to the parent value.