var _ = require('./underscore.js');
var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function TicTacToe() {
  //initialize board
  this.createBoard = function(){
    var b = new Array(3);
    for(var i = 0; i < 3; i++) {
      b[i] = ["-","-","-"];
    }
    return b;
  };
  this.board = this.createBoard();
  var player = "X"

  this.renderBoard =  function(){
    this.board.forEach(function(row){
      console.log(row);
    })
    console.log("\n");
  };

  this.playTurn = function(callback2){
    console.log("Current player:" + player)
    reader.question("Which row? e.g. 0\n", function(x){
      reader.question("Which column? e.g. 1\n", function(y){
      var ex = x;
      var wy = y;

      callback2(ex, wy);
      });
    });
  };

  this.validMove = function(x, y) {
    return (this.board[x][y] == "-");
  };

  this.makeMove = function(x, y) {
    this.board[x][y] = player;
  };

  this.won = function(){
    var that = this
    var win1 = function(){
      for(var i = 0; i < 3; i++){
        if (_.isEqual(that.board[i], ["X","X","X"]) || _.isEqual(that.board[i], ["O","O","O"])) {
          return true;
        }
      }
      return false;
    };

    var win2 = function(){
      for(var i = 0; i < 3; i++){
        var test = []
        for(var j = 0; j < 3; j++) {
          test.push(that.board[j][i]);
        }
        if (_.isEqual(test, ["X","X","X"]) || _.isEqual(test, ["O","O","O"])){
          return true;
        }
      }
      return false;
    };

    var win3 = function(){
      test = [that.board[0][0], that.board[1][1], that.board[2][2]]
      if (_.isEqual(test, ["X","X","X"]) || _.isEqual(test, ["O","O","O"])){
        return true;
      }
      test = [that.board[2][0], that.board[1][1], that.board[0][2]]
      if (_.isEqual(test, ["X","X","X"]) || _.isEqual(test, ["O","O","O"])){
        return true;
      }
      return false;
    }

    return (win1() || win2() || win3());
  }


  this.playLoop = function(callback1){
    var that = this;

    if (this.won()){
      this.renderBoard();
      callback1(player == "X" ? "O":"X");
    }
    else{
      this.renderBoard();
      this.playTurn(function(x,y){
        if (that.validMove(x,y)) {
          that.makeMove(x, y);
          player = (player == "X" ? "O":"X");
        }
        else {
          console.log("\nINVALID MOVE");
        }
        that.playLoop(callback1);
      });
    }
  };
};

t = new TicTacToe();
t.playLoop(function(player){ console.log(player + " Wins")})
