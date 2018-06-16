# Iterator Pattern
 Iterator Pattern is clear and straightforward way to access into code structure, Think about it, if you want to access into data updated automatically in complex structure? in this case you need to use Iterator Pattern

 In the iterator pattern, you have an object containing some sort of aggregate data. This data may be stored internally in a complex structure, and you want to provide easy access to each element of that structure. The consumer of your object doesn’t need to know how you structure your data; all they need is to work with the individual elements.

 Example:
 ```javascript
 function Iterator(el) {
    this.index = 0;
    this.elements = el;
}

Iterator.prototype = {
    next: function() {
        return this.elements[this.index++];
    },
    hasNext: function() {
        return this.index < this.elements.length;
    }
};

module.exports = Iterator;
 ```

Iterators are so useful that they are actually part of the next generation of JavaScript. The iterator pattern used in ECMAScript 6 is a single method that returns an object that contains a done and value parameters. The done parameter is true when the iterator is at the end of the collection. What is nice about the ECMAScript 6 iterators is that the array collection in JavaScript will support the iterator.