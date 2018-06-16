# State Pattern
 State Pattern is main process for many JavaScript Frameworks & Libraries in these days specially on `Single Page Application(SPA)`, Based on create more than `State` with different `performAction` and ready to fire.

### Builder Pattern VS State Pattern
 I think you now remmeber this words I say it before on <a href="https://github.com/moumen-soliman/Javascript/tree/master/Design%20Patterns/creational/builder">Builder Pattern</a> But there is difference, `Builder Pattern` is store data & functions and we call manually when I need it without statment, But `State Pattern` is based on `Statments` all `States` Store on `State Manager` based on `performAction`, 
 
 So we have `State Manager` is manage states based on `performAction` on every `State`, If we call that `performAction` so `State Manager` choose this state and make it on staging and run this state, Popular way to using it is <a href="https://github.com/moumen-soliman/Javascript/blob/master/JS-Deeper/IIFE-immediately-invoked-function-expression.js">IIFE (Immediately Invoked Function Expression)</a>

 Example define how state thinking: 
 ```javascript
//state manager
function (action, amount) {
    //state
    if (this.state == "overdrawn" && action == "withdraw") {
        this.state = "on hold";
    }
    //state
    if (this.state == "on hold" && action != "deposit") {
        this.state = "on hold";
    }
    //state
    if (this.state == "good standing" && action == "withdraw" && amount <= this.balance) {
        this.balance -= amount;
    }
    //state
    if (this.state == "good standing" && action == "withdraw" && amount >this.balance) {
        this.balance -= amount;
        this.state = "overdrawn";
    }
};
 ```
 This is just a sample of what could be a much more complicated workflow. if statements of this length are painful to debug and highly error prone. Simply flipping a greater than sign is enough to drastically change how the if statement works.


 Let's take a look at some of the code that is needed to manage a bank account at the Iron Bank of Braavos. First is the state manager based on `invoke()`:

```javascript
var BankAccountManager = (function () {
    function BankAccountManager() {
        this.currentState = new GoodStandingState(this);
    }
    BankAccountManager.prototype.Deposit = function (amount) {
        this.currentState.Deposit(amount);
    };
    BankAccountManager.prototype.Withdraw = function (amount) {
        this.currentState.Withdraw(amount);
    };
    BankAccountManager.prototype.addToBalance = function (amount) {
        this.balance += amount;
    };
    BankAccountManager.prototype.getBalance = function () {
        return this.balance;
    };
    BankAccountManager.prototype.moveToState = function (newState) {
        this.currentState = newState;
    };
    return BankAccountManager;
})();
```
The bank account manager class provides a state for the current balance and also the
current state. To protect the balance, it provides an accessor to read the balance and
another to add to the balance. In a real banking application, I would rather expect
that the function to set the balance would have more protection than this. In this
version of the bank manager, the ability to manipulate the current state is accessible
to the states. They have the responsibility to change states. This functionality can be
centralized in the manger but that increases the complexity of adding new states.