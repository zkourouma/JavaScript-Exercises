var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function Towers() {
  this.towers = [[1,2,3],[],[]];
  var that = this;
}

Towers.prototype.validMove = function (start, finish) {
  if (this.towers[start-1].length != 0 &&
     (this.towers[finish-1].length == 0 ||
      this.towers[start-1][0] < this.towers[finish-1][0])) {
    return true;
  }
  else {
    return false;
  }
};

Towers.prototype.won = function() {
  if (this.towers[1].length === 3  || this.towers[2].length === 3) {
    return true;
  }
  else {
    return false;
  }
};

Towers.prototype.turn = function(callback) {
  reader.question("Enter a start tower.", function(t1) {
    reader.question("Enter a finish tower.", function(t2) {
      var tow1 = parseInt(t1);
      var tow2 = parseInt(t2);

      callback(tow1, tow2);
    });
  });
}

Towers.prototype.play = function(callback) {
  var that = this;
  if (that.won()) {
    callback();
    return;
  }
  else {
    that.turn(function(start, finish) {
      if (that.validMove(start, finish)) {
        that.towers[finish-1].unshift(that.towers[start-1].shift());
        console.log("Tower 1: " + that.towers[0]);
        console.log("Tower 2: " + that.towers[1]);
        console.log("Tower 3: " + that.towers[2]);
      }
      //always put callback in the loop, otherwise program continues without waiting for a users response. Here, turn is called on Towers, and only AFTER a response is given will the inner callback (that.play(callback)) be called. AKA, the program won't answer itself.
      that.play(callback);
    });

  };
}
//
game = new Towers();
game.play(function(){console.log("CONGRATS")});