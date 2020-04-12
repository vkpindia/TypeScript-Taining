/* TypeScript function*/
var una: string = "Ashok";
function first(): void {
    console.log('Welcome to TypeScript Function');
}

function second(): string {
    return una;
}
function third(scourse: string) {
    console.log('scourse', scourse);
}

//function calling
first();
let uname = second();
console.log('Welcome to ', uname);
third("TypeScript");