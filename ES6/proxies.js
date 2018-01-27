//Proxied Object Property Lookup Behavior

let handler = {
	get: function(target, name) {
		return name in target ? //if the key exists
			target[name] : //return the key
			'key does not exist'; //else, return custom message
	}
};

let o = {
	reason: 'reason',
	code: 'code'
}

let p = new Proxy(o, handler);

console.log(p.o.reason) // result: 'reason'
console.log(p.o.code) // result: 'code'
console.log(p.o.anyword) // result: 'key does not exist'


//Using Proxies to enforce value validations

let validator = {
	set: function(obj, prop, value){
		if (prop === 'age'){
			if (!Number.isInteger(value)) {
				throw new TypeError('The age is not an integer');
			}
			if (value > 200) {
				throw new RangeError('The age seems invalid');
			}
		}

		//The defualt behavior to store the value
		obj[prop] = value;

		//Indicate success
		return true;
	}
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); //100
person.age = 'young'; //Throw an exception - the age is not an integer
person.age = 300; //Throw an exception - the age is invalid


//There are many real-world applications for Proxies:

// validation
// value correction
// property lookup extensions
// tracing property accesses
// revocable references
// implementing the DOM in javascript