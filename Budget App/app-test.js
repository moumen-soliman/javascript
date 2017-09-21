// BUDGET CONTROLLER
var budgetController = (function(){

    //function constructor
    var Expenses = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }

    };

    return {
        addItem: function(type, des, val) {
            var newItem;

            if (type === 'exp') {
                newItem = 
            }

        }
    };

})();

// UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    return {
        getInput: function() {
            return {
            type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or expensive
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value,
            }
        },

        addListItem: function(obj, type) {

            //Create HTML String with placeholder text


            //Replace the placeholder text with some actual data


            //Insert the HTML into the DOM
            
        },

        getDOMstrings: function(){
            return DOMstrings;
        }   
    }

})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    
    var setupEventlisteners = function() {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

        document.addEventListener('keypress',function(event){

            if (event.keyCode === 13 || event.which === 13) { //13 is ENTER number in keyboard , so you can search about it in google
                
                ctrlAddItem();

            }

        });

    };

    var ctrlAddItem = function(){
        var input, newItem;

        // Get Field input data

        input = UICtrl.getInput();

        // add the item to the budget controller
        newItem = budgeCtrl.addItem(input.type, input.description, input.value);
        

        // add the item to the UI

        

        // Calculate the budget

        

        // Display the budget on the UI

        
    };


    return {
        init: function() {
            console.log('application has started.');
            setupEventlisteners();
        }
    }

})(budgetController, UIController);


controller.init();