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
> 📜 From Mastering JavaScript Design Patterns by Simon Timms Book
>
> ### The invoker
> The invoker is the part of the command pattern that instructs the command to execute its instructions. The invoker can really be anything; a timed event, a user interaction, or just the next step in the process may all trigger invocation. When we executed simpleCommand earlier, we were playing at being the invoker. In the more rigorous command, the invoker might look 
>
>something like:
>`command.Execute()`
>
>### The receiver
>The final component in the command pattern is the receiver. This is the target of the command execution. In our example, we created a receiver called
>LordInstructions: 
```javascript
var LordInstructions = (function () {
 function LordInstructions() {
 }
    LordInstructions.prototype.BringTroops = function (location,
    numberOfTroops, when) {
        console.log("You have been instructed to bring " + numberOfTroops + " troops to " + location + " by " + when);
    };
    return LordInstructions;
})();
```
>The receiver knows how to perform the action that the command has deferred. There need not be anything special about the receiver; in fact it may be any class.

### Overall
The command pattern is a very useful one to defer the execution of some piece
of code.