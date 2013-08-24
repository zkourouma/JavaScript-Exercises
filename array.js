Array.prototype.myUniq = function(){
  var new_array = [];
  for(var i = 0; i < this.length; i++){
    if (new_array.indexOf(this[i]) === (-1)){
      new_array.push(this[i]);
    }

  }
  return new_array;
};

var plain = [1,2,3,4,4,5,2,4,3]
var some = ["a","b","c"]

Array.prototype.twoSum = function(){
  var new_array = [];

  for(var i = 0; i < (this.length - 1); i++){
    for(var j = (i + 1); j < this.length; j++){
      if (this[i] + this[j] === 0){
        new_array.push([i, j]);
      }
    }
  }
  return new_array;
};

var ads = [1,2,3,-1,6,10,0,-3];

var TowersOfHanoi = function(){
  this.tower1 = [1,2,3];
  this.tower2 = [];
  this.tower3 = [];
  this.move = function(start, finish){
    if (finish.length === 0 || start[0] < finish[0]){
      finish.unshift(start.shift());

    }
  };

  this.play = function(){
    while((this.tower3).toString() != ([1,2,3]).toString()){
      console.log("Tower 1: " + this.tower1);
      console.log("Tower 2: " + this.tower2);
      console.log("Tower 3: " + this.tower3);

      var start = prompt("Take from? (e.g. 1,2,3)");
      switch(start){
        case "1":
        start = this.tower1;
        break;
        case "2":
        start = this.tower2;
        break;
        case "3":
        start = this.tower3;
        break;
      default:
        continue;
      }
      var finish = prompt("Put on? (eg 1,2,3)");
      switch(finish){
        case "1":
        finish = this.tower1;
        break;
        case "2":
        finish = this.tower2;
        break;
        case "3":
        finish = this.tower3;
        break;
      default:
        continue;
      }
      this.move(start, finish);
    }
    alert("YOU WIN");
  }
};

var tower = new TowersOfHanoi();

Array.prototype.myTranspose = function() {
  var transposed = [];
  for(var x = 0; x < this[0].length; x++){
    transposed.push([]);
  }
  for(var i = 0; i < this.length; i++){
    for(var j = 0; j < this[i].length; j++){
      transposed[j].push(this[i][j]);
    }
  }
  return transposed;
}


var rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];