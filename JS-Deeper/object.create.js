var personProto = {
    calculateAge: function() { //anonymous function
        console.log(2016 - this.yearOfBirth);
    }
};

// create let you to add objects is not exist in first one
var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth: { value: 1969 },
    job: { value: 'designer' }
});