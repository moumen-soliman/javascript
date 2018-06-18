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