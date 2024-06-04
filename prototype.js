let myName = "shruti     ";

console.log(myName.length)
console.log(myName.trim().length)

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
Object.prototype.shruti = function(){       //we have directly inserted function shruti() into Object(top level hierarchy)
    console.log(`shruti is in all objects`);
}

heroPower.shruti();
myHeros.shruti();

//Object<-Array
//Object<-string
//Object<-

///let's try to insert some function in any array, let's see if its available in all other objects
Array.prototype.myNameShruti = function(){
    console.log('this is inserted in Array');
}

myHeros.myNameShruti();
// heroPower.myNameShruti() //not acces