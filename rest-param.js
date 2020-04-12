// Rest Parameter example
function stuData() {
    var numArray = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numArray[_i] = arguments[_i];
    }
    var total = 0;
    for (var i in numArray) {
        total += numArray[i];
    }
    console.log('Total Number', total);
}
// Function call
stuData(10, 20);
stuData(10, 20, 30);
stuData(10, 20, 30, 40);
stuData(10, 20, 50, 87);
stuData(10, 20, 78, 09, 6);
