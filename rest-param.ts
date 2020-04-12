// Rest Parameter example

function stuData(...numArray: number[]) {
  var total: number = 0;
  for(let i in numArray) {
      total += numArray[i];
  }

  console.log('Total Number', total);
}

// Function call
stuData(10, 20);
stuData(10, 20, 30);
stuData(10, 20, 30, 40);
stuData(10, 20, 50, 87);
stuData(10, 20, 78, 09 , 6);