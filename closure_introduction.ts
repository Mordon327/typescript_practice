//functions have access to any public variables in the outer scope
function nameFunction(name : string) : void {
  var n : string = name;

  function printName() {
    console.log(n);
  }
  printName();
}
nameFunction("Shane Soderstrom");

function nameingFunction(name : string) {
  var n : string = name;
  return function() {
    console.log(n);
  }
}
var nameAgain = nameingFunction("Shane Soderstrom");
nameAgain();

console.log("Closure. It maintains its self like a class.");
function lineup() {
  var nowbatting : number = 1;
  return {
    nextBatter() {
      nowbatting++;
    },
    currentBatter() {
      return nowbatting;
    }
  }
}

let batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();

let pitchers = lineup();
console.log(pitchers.currentBatter());
pitchers.nextBatter();

