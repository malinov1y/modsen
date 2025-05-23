const obj = { 
  name: 'Object', 
  getName: function () { 
	return this.name; 
  } 
}; 
const getName = obj.getName.bind(obj); // Используем bind чтобы передать контекст
console.log(getName()); 
