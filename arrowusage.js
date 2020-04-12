var products = [
    {
        name: 'Book',
        price: 130
    },
    {
        name: 'Book1',
        price: 120
    },
    {
        name: 'Book1',
        price: 150
    }
];
var numberArray = [10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
var filteredNumber = numberArray.filter(function (result) {
    console.log('result', result);
    result % 3 == 0;
});
console.log('filteredNumber', filteredNumber);
var productPrice = products.map(function (item) { return item.price; });
// var productPrice = products.map(function (item) { return item.price });
console.log('productPrice', productPrice);
var mul = function (x, y) { return x * y; };
//function call
var result = mul(5, 4);
console.log('mutiplication', mul(5, 4));
