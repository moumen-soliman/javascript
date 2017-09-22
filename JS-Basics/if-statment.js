var name = 'Moumen' , age = 26 , isMarried = prompt('Moumen is marry ?');

// if (isMarried === 'yes') {
//     console.log(name + ' is married!');
// } else {
//     console.log(name + ' will hopefully marry soon :)');
// }

//if else --> short
isMarried === 'yes' ? console.log(name + ' is married!') : console.log(name + ' will hopefully marry soon :)');

//if elseif else --> short
age < 20 ? console.log('Moumen is a teenager') : age >= 20 && age < 30 ? console.log('Moumen is a young man.') : console.log('Moumen is a man.');

//if else --> short
var shortIF = age > 20 ? 'YES!' : 'NO!';
console.log(shortIF);
