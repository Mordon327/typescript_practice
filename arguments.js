function printAddress(street, streetTwo, state) {
    if (state === void 0) { state = "UT"; }
    console.log(street);
    if (streetTwo)
        console.log(streetTwo);
    console.log(state);
}
console.log("One Street");
printAddress("123 Any St");
console.log("Two Street");
printAddress("123 Any St", "321 Many St");
printAddress("123 Any St", "321 Many St", "TX");
console.log("Splat or Rest argument");
function lineupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log("Team: " + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
lineupCard("Landrovers", "Mosqitoe", "Rock", "Pavement", "Gnat", "Squashed");
//# sourceMappingURL=arguments.js.map