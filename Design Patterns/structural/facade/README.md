# Facade Pattern

 What's behind the scenes?, Facade is working behind the scenes, When you use mobile application or click on icon there is action behind this icon is going to fire, right? This is Facade pattern is simple interface to the complex subsystem is a facade

 Facade pattern is one of the Structural Patterns. The main aim of it is to hide the complexity of a system, class or logic and provide all functionalities behind a simple interface. Commonly, Facade is implemented in a way that one class is related to other classes which represents a system logic

 ```js
//facade 
var shopFacade = {
    calc: function(price) {
        price = discount(price);
        price = fees(price);
        price += shipping();
        return price;
    }
};

//actions or functions to use facade 
function discount(value) {
   return value * 0.9;
}

//actions or functions to use facade 
function shipping() {
   return 5;
}

//actions or functions to use facade 
function fees(value) {
    return value * 1.05;
}

module.exports = shopFacade;
 ```
There is popular example exist already on `JQuery`, We can see facades on `JQuery`:

```js
//$.ajax facades
$.get( url, data, callback, dataType );
$.post( url, data, callback, dataType );
$.getJSON( url, data, callback );
$.getScript( url, callback );
//example from Addyosmani book
```
These are translated behind the scenes to:

```js
//inside facades

// $.get()
$.ajax({
  url: url,
  data: data,
  dataType: dataType
}).done( callback );
 
// $.post
$.ajax({
  type: "POST",
  url: url,
  data: data,
  dataType: dataType
}).done( callback );
 
// $.getJSON()
$.ajax({
  url: url,
  dataType: "json",
  data: data,
}).done( callback );
 
// $.getScript()
$.ajax({
  url: url,
  dataType: "script",
}).done( callback );
//example from Addyosmani book
```
What's even more interesting is that the above facades are actually facades in their own right, hiding a great deal of complexity behind the scenes.

