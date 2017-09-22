//first example
var names = ['Moumen', 'Soliman', 'Mark'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
names[1] = 'Ben';
console.log(names);

//second example (use push,unshift,pop,shift)
var moumen = ['Moumen', 'Soliman', 1990, 'developer', false];

moumen.push('blue');
moumen.unshift('Mr.');
moumen.pop();
moumen.shift();
console.log(moumen);

if (moumen.indexOf('teacher') === -1) {
    console.log('Moumen is NOT a teacher.');
}