var bubbleSort = function(array){
  var notSorted = true;
  var temp;

  while (notSorted) {
    notSorted = false;
    for (var i = 0; i < array.length-1; i++){
      if (array[i] > array[i+1]){
        temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
        notSorted = true;
      }
    }
  }
  return array;
};

var arr = [6,1,9,5,3,10];


var substrings = function(string){
  var subs = [];
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j <= string.length; j++) {
      subs.push(string.substring(i,j));
    }
  }
  return subs;
};

var str = "cat";
console.log(substrings(str));