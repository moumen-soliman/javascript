# Command Pattern
In object-oriented programming, the command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.

`Command Pattern` allows you to encapsulate actions in objects. The key idea behind this pattern is to provide the means to decouple client from receiver.

The general idea behind the Command pattern is that it provides us a means to separate the responsibilities of issuing commands from anything executing commands, delegating this responsibility to different objects instead.

Example:
```javascript
// Receiver
class Bulb {
    //encapsulate
    turnOn() {
        console.log('Bulb has been lit')
    }
    //encapsulate
    turnOff() {
        console.log('Darkness!')
    }
}
```

### Overall
The command pattern is a very useful one to defer the execution of some piece
of code.