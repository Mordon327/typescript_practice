var x = 0;
console.log("While loop");
while (x < 10) {
    console.log(x);
    x++;
}
var players = [3, 10, 5, 8, 11, 4, 7];
//prints out the index
console.log("For in loop");
for (var player in players) {
    console.log(player);
}
//prints out the value
console.log("For of loop");
for (var _i = 0, players_1 = players; _i < players_1.length; _i++) {
    var player = players_1[_i];
    console.log(player);
}
