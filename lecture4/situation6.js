const forbiddenWords = ['spam', 'advertisement', 'scam'];
const message = "This is a spam message";
console.log(message.includes(...forbiddenWords));
forbiddenWords.shift()
console.log(forbiddenWords);