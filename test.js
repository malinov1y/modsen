const user = {
    name: "hello",
}

const user2 = new Object( {name: "hello"} );

user.getName = function() {
    console.log(user.name);
}

const superUser = {};
Object.assign(superUser, user);

delete superUser.name;
superUser.login = 'login';

console.log(user.name);
console.log(superUser.name);

user.getName();
superUser.getName();