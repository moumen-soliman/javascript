# Adapter Pattern
 Adapter Pattern allows classes with incompatible interfaces to work together by wrapping its own interface around that of an already existing class

 > 📜 From Wikipedia
 >
 >In software engineering, the adapter pattern is a   software design pattern (also known as Wrapper, an alternative naming shared with the Decorator pattern) that allows the interface of an existing class to be used as another interface.

 Best example to see how Adapter Pattern work is looking for `JQuery` style stuff:
 ```javascript
 
// Setting opacity
$( ".container" ).css( { opacity: .5 } );
 
// Getting opacity
var currentOpacity = $( ".container" ).css('opacity');

//example from addyosmani design patterns book
 ```
translates an interface for an object or class into an interface compatible with a specific system.