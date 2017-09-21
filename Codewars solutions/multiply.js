//https://www.codewars.com/kata/50654ddff44f800200000004
function multiply (a, b) {
    return a * b;
}

function timesCreator (a) {
    return function (b) {
        return multiply(a, b);
    }
}

timesTwo = timesCreator(2);
timesTwelve = timesCreator(12);

// Outputs: 4
console.log(timesTwo(2));

// Outputs: 24
console.log(timesTwelve(2));