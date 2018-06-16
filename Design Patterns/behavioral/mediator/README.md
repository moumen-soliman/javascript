# Mediator Pattern
 Mediator Pattern manage many-to-many relationships in classes, If you need to create something like news for every control in your application and that news going to another control before performing thier action
 
 In this case you save your application from memory leak or memory heap, because every control want to know if other controls on the page are valid before performing their action

 A mediator will sit between the various components and act as a single place in which message routing changes can be made. By doing so, the mediator simplifies the otherwise complex work needed to maintain the code. In the case of controls on a form, the mediator is likely to be the form itself

 Example:
```javascript
function TrafficTower() {
    this.airplanes = [];
}

TrafficTower.prototype.requestPositions = function() {
    return this.airplanes.map(function(airplane) {
        return airplane.position;
    });
};

function Airplane(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
}

Airplane.prototype.requestPositions = function() {
    return this.trafficTower.requestPositions();
};

module.exports = [TrafficTower, Airplane];
```
###Mediator Example

A Mediator is an object that coordinates interactions (logic and behavior) between multiple objects. It makes decisions on when to call which objects, based on the actions (or inaction) of other objects and input.

```javascript
var orgChart = {
 
  addNewEmployee: function(){
 
    // getEmployeeDetail provides a view that users interact with
    var employeeDetail = this.getEmployeeDetail();
 
    // when the employee detail is complete, the mediator (the 'orgchart' object)
    // decides what should happen next
    employeeDetail.on("complete", function(employee){
 
      // set up additional objects that have additional events, which are used
      // by the mediator to do additional things
      var managerSelector = this.selectManager(employee);
      managerSelector.on("save", function(employee){
        employee.save();
      });
 
    });
  },
 
  // ...
}
//example from addyosmani design patterns book
```
This example shows a very basic implementation of a mediator object with some utility methods that can trigger and subscribe to events.
