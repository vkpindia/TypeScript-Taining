// Regular function ES5
/* 
function mul(){
    console.log('Js Regular Functuion');
} */
const mul = function(){
    console.log('ES5 Regular function.');
}

//Arrow ES6
const mul1 = ()=> console.log('arguments');

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
mul();
mul1();