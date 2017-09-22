// First scoping example
var a = 'Hello!';
first();

function first() {
    //scoping here - see "var a , b"
    var b = 'Hi!';
    second();

    function second() {
        //scoping here - see "var a , b , c"
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    //scoping here  - see "var a,b"
    var b = 'Hi!';
    second();

    function second() {
        //scoping here - see "var a,b,c"
        var c = 'Hey!';
        third()
    }
}

function third() {
    //scoping here - see "var a,d"
    var d = 'John';
    //console.log(c);
    console.log(a+d);
}