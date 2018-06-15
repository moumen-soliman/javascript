# Builder Pattern
 In Javascript functionality world we need to store functions with spesific missions without fire or return.
 
 So we can build Classes or Objects with spesific functions or `DOM` and use it when we need by using `variable`, When use it we plugged it not create another one.

 Let's drop in and look at some of the code. To start with, we'll create a number of utility classes, which will represent the parts of a tournament. We can see this in the following code:

 ```javascript
    var Attendee = (function () {
        function Attendee(name) {
        this.name = name;
    }
    return Attendee;
    })();
    Westeros.Attendee = Attendee;
    //example from [Javascript Design Patterns by Simon Timms]
 ```
 Another example:

 ```javascript
function Request() {
    this.url = '';
    this.method = '';
    this.payload = {};
}

function RequestBuilder() {

    this.request = new Request();

    this.forUrl = function(url) {
        this.request.url = url;
        return this;
    };

    this.useMethod = function(method) {
        this.request.method = method;
        return this;
    };

    this.payload = function(payload) {
        this.request.payload = payload;
        return this;
    };

    this.build = function() {
        return this.request;
    };

}

module.exports = RequestBuilder;
 ```

 So we can use our Class or Function as a store ready to plugged-in in any part we need and use it API's or DOM etc...

 Does the builder pattern still make sense in view of JavaScript's prototype extension model? I believe so. There are still cases where a complicated object needs to be created according to different approaches.