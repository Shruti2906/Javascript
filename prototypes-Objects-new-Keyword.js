const newHero = ['spiderman', 'thor'];

function multipleBy5(num){
    return num*5;
}
multipleBy5.power = 3;
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

//everything in js can work as object

function createUser(username, score){
    this.username = username;
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}
const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.printMe()