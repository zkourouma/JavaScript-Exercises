var Cat = function(name, owner){
  this.name  = name;
  this.owner = owner;
}
var cat = new Cat("george", "scott");

Cat.prototype.cute_statement = function(){
  return this.owner + " loves " + this.name
};

console.log(cat.cute_statement());


Cat.prototype.cute_statement = function(){
 return "everyone loves " + this.name;
}

console.log(cat.cute_statement());

Cat.prototype.meow = function(){
  return "mewo";
}

console.log(cat.meow());

cat.meow = function(){
  return "meow spelled properly";
}

console.log(cat.meow());