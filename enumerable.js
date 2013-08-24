var multiple = function(array){
  var new_array = [];
  for(var i = 0; i < array.length; i++){
    new_array.push(array[i] * 2);
  }
  return new_array;
};

var times = [2,4,6];


var myEach = function(array, funct){
  for(var i = 0; i < array.length; i++){
    funct(array[i]);
  }
  return array;
};

var arr = ["2", 5, "false", 8];

var myMap = function(array, funkt){
  var new_array = [];

  myEach(array, function(x) {
    new_array.push(funkt(x));
  });

  return new_array;
};

var arr = [1,3,5,56]
var tet = function(thing){
  return thing * 2;
};


var inject = function(array, funkd, init){
  var return_val = init || 0;

  myEach(array, function(item){
    return_val = funkd(return_val, item);
  });
  return return_val;
};

var som = function(a,b){
  return a + b;
}

console.log(inject(arr, som))