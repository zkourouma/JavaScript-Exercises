var range = function(start,finish){
  if(start === finish){
    return [start];
  }
  var arr = [start]
  return arr.concat(range(start+1, finish));
}


var total = function(array) {
  if (array.length === 1) {
    return array[0];
  }

  var tot = array.shift();
  return tot + total(array);

};


var exp1 = function(b,exp) {
  if (exp === 0){
    return 1;
  }

  return b * exp1(b, exp-1);
}

var exp2 = function(b, exp){
  if (exp === 0){
    return 1;
  }

  if (exp % 2 === 0){
    return exp2(b, exp/2) * (exp2(b, exp/2));
  }
  else {
    return b * (exp2(b, (exp-1)/2) * (exp2(b, (exp-1)/2)));
  }

}

var fib = function(n) {
  if (n === 1) {
    return [0];
  }
  if (n === 2) {
    return [0,1];
  }
  var fibs = fib(n-1);

  return fibs.concat(fibs[fibs.length - 1] + fibs[fibs.length - 2]);

};

var binarySearch = function(array, target) {
  if (array.length === 0 || (array.length === 1 && array[0] !== target)) {
    return null;
  }

  var mid = Math.floor(array.length / 2);

  if (array[mid] === target) {
    return mid;
  }

  else if (target < array[mid]) {
    return binarySearch(array.slice(0,mid), target);
  }

  else {
    if (binarySearch(array.slice(mid+1, array.length), target) === null){
      return null;
    }
    else {
      return mid + 1 + binarySearch(array.slice(mid+1, array.length), target);
    }
  }

};
var def = [4,5,6,7,8,9,10];

var mergeSort = function(array){
  if(array.length == 1){
    return array
  }

  var mid = Math.floor(array.length/2);
  var left = mergeSort(array.slice(0, mid));
  var right = mergeSort(array.slice(mid, array.length));
  return merge(left, right);
};

var merge = function(arr1, arr2){
  var merged = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] < arr2[0]){
      merged.push(arr1.shift());
    }
    else {
      merged.push(arr2.shift());
    }
  }
  return merged.concat(arr1, arr2);
};

var makeChange = function(value, coins){
  if (value === 0){
    return [];
  }

  coins = coins.sort().reverse();
  var solutions = [];
  for (var i = 0; i < coins.length; i++){
    if (coins[i] > value){
      continue;
    }

    var check = [];
    check.push(coins[i]);
    check = check.concat(makeChange(value-coins[i], coins));
    solutions.push(check)
  }

  var shortest = solutions[0]

  for (var i = 0; i < solutions.length; i++){
    if (solutions[i].length < shortest.length){
      shortest = solutions[i];
    }
  }
  return shortest;
};

Array.prototype.subsets = function() {
  if (this.length === 0) {
    return [this];
  }
  var left = [this[0]];
  var subs = (this.slice(1,this.length)).subsets();
  var new_subs = [];
  for(i = 0; i < subs.length; i++){
    new_subs.push(left.concat(subs[i]));
  }
  return new_subs.concat(subs);
}