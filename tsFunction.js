/* TypeScript function*/
var una = "Ashok";
function first() {
    console.log('Welcome to TypeScript Function');
}
function second() {
    return una;
}
function third(scourse) {
    console.log('scourse', scourse);
}
//function calling
first();
var uname = second();
console.log('Welcome to ', uname);
third("TypeScript");
