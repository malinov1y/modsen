const person = { name: 'Alice' };

function greet(message) {
    return `${message}, ${this.name}`;
}

console.log(greet.call(person, 'Hello'));
console.log(greet.apply(person, ['Good morning']));
const boundFunc = greet.bind(person);
console.log(boundFunc('Hi'));
const greeting = greet.bind(person, 'Hi');
console.log(greeting());