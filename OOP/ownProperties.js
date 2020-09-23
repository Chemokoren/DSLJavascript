function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line
for(let property in canary){
    if (canary.hasOwnProperty(property)){
        ownProps.push(property)
    }
}
console.log(ownProps.name)

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps1 = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
        ownProps1.push(property);
    } else {
        prototypeProps.push(property);
    }
}
// console.log(ownProps1); // prints ["name"]
console.log(prototypeProps); // prints ["numLegs"]
