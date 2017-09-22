function calculateAge(yearOfBirth) {
    var age = 2016 - yearOfBirth;
    return age;
}

var ageMoumen = calculateAge(1990);
var ageSoliman = calculateAge(1969);
var ageMary = calculateAge(1948);


function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement >= 0) {
        console.log(name + ' retires in ' + retirement + ' years.');
    } else {
        console.log(name + ' is already retired.');
    }
}


yearsUntilRetirement('Moumen', 1990);
yearsUntilRetirement('Soliman', 1969);
yearsUntilRetirement('Mary', 1948);