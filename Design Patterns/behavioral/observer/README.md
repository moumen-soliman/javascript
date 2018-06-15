# Observer Pattern
Observer Pattern is perhaps the most used pattern in the Javascript world, You think before how to subscribe spesific browser event? or how browser events like (keypress, on, mouserover) works? 

Observer Pattern is a system to subrscribe one
object calling another object’s method,an object subscribes to another object’s specific activity and gets notified. The subscriber is also called observer, while the object being observed is called publisher or subject. The publisher notifies (calls) all the subscribers when an important event occurs and may often pass a message in the form of an event object.

Let's see example ES5: 
```javascript
function Product() {
    this.price = 0;
    this.actions = [];
}

Product.prototype.setBasePrice = function(val) {
    this.price = val;
    this.notifyAll();
};

Product.prototype.register = function(observer) {
    this.actions.push(observer);
};

Product.prototype.unregister = function(observer) {
    this.actions.remove.filter(function(el) {
        return el !==  observer;
    });
};

Product.prototype.notifyAll = function() {
    return this.actions.forEach(function(el) {
        el.update(this);
    }.bind(this));
};

var fees = {
    update: function(product) {
        product.price = product.price * 1.2;
    }
};

var proft = {
    update: function(product) {
        product.price = product.price * 2;
    }
};

module.exports = [Product, fees, proft];
```

Here we create `Subscribers` and Ovserver catch them and when event is on fire, The observer pattern generalizes and codifies this idea. Instead of having a single call to the listener, the observer pattern allows interested parties to subscribe to change notifications.