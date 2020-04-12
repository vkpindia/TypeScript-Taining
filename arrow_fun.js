// Regular function ES5
/*
function mul(){
    console.log('Js Regular Functuion');
} */
var mul = function () {
    console.log(arguments);
};
//Arrow ES6
var mul1 = function () { return console.log('arguments'); };
// Understanding this
// const user ={
//     name: "Ashok",
//     regular: function(){
//         console.log('Hello', this.name);
//     },
//     arrow: ()=> {console.log('Hello', this.name)},
// }
//function call
/* user.regular();
user.arrow(); */
mul(1, 2, 3);
mul1();
