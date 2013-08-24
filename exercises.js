var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function timer(){
  var time = Date.now();
  setInterval(function(){
    var dateObj = new Date(Date(time + 5000));
    console.log(
      dateObj.getHours() + ":" +
      dateObj.getMinutes() + ":" +
      dateObj.getSeconds())
  }, 5000);
};

function compare(el1, el2, callback3) {
  reader.question("Enter '?': " + el1 + " ? " + el2, function(comparison) {
   callback3(comparison);
  });
};

function performSortPass(array, i, sorted, callback2) {
  if (i == (array.length -1)){
    callback2(sorted);
    return;
  };

  compare(array[i], array[i+1], function(inputs) {
    if (inputs == ">"){
      var temp1 = array[i];
      array[i] = array[i+1];
      array[i+1] = temp1;

      sorted = false;
    }
    performSortPass(array, i+1, sorted, callback2);
  });

  };

function crazyBubbleSort(array, callback1) {
  performSortPass(array, 0, true, function(notSorted) {
    if (!notSorted) {
      crazyBubbleSort(array, callback1);
    }
    else {
      callback1(array);
    }
  });
};

crazyBubbleSort([4,2,8,1,9], function(array) {
  console.log("Array is sorted! " + array);
  });
