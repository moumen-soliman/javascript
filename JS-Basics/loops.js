var names = ['John', 'Jane', 'Mary', 'Mark', 'Bob'];

// for loops
    //example one
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }

    //example two
    for (var i = names.length - 1; i >= 0; i--) {
        console.log(names[i]);
    }


// while loops
var i = 0;
while(i < names.length) {
    console.log(names[i]);
    i++;
}

// break and continue
    //example one
    for (var i = 1; i <= 7; i++) {
        console.log(i);
        
        if (i === 3) {
            break;
        }
    }

    //example two
    for (var i = 1; i <= 7; i++) {
        if (i === 3) {
            continue;
        }
        
        console.log(i);
    }