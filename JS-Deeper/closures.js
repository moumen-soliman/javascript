//these two simples about closures , but actully closures is got important use in big projects , checkout Budget project in my github , you will find advanced use for closures and how it works
//example one
function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementGermany = retirement(65);
var retirementUS = retirement(66);
var retirementIceland = retirement(67);

retirementGermany(1990); //output 39 years left until retirement.
retirementUS(1990); //output 40 years left until retirement.
retirementIceland(1990); //output 41 years left until retirement.

//example two
function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

interviewQuestion('teacher')('John'); //output What subject do you teach, John?