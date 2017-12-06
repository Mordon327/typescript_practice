//functions have access to any public variables in the outer scope
function nameFunction(name) {
    var n = name;
    function printName() {
        console.log(n);
    }
    printName();
}
nameFunction("Shane Soderstrom");
function nameingFunction(name) {
    var n = name;
    return function () {
        console.log(n);
    };
}
var nameAgain = nameingFunction("Shane Soderstrom");
nameAgain();
console.log("Closure. It maintains its self like a class.");
function lineup() {
    var nowbatting = 1;
    return {
        nextBatter: function () {
            nowbatting++;
        },
        currentBatter: function () {
            return nowbatting;
        }
    };
}
var batters = lineup();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
console.log(batters.currentBatter());
batters.nextBatter();
var pitchers = lineup();
console.log(pitchers.currentBatter());
pitchers.nextBatter();
//# sourceMappingURL=closure_introduction.js.map