//code written in ts is compiled to js from command tsc "filename"
//this results in creation of new file with same name with .js extension in same dir 
// when node filename.js gives output

var names:string="mz"
console.log(names);
console.log(typeof(names));


// in terminal :- tsc 2.ts this generates a filewith 2.js and then node filename.js gives output