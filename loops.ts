var x : number = 0;
console.log("While loop");
while (x < 10) {
  console.log(x);
  x++;
}

let players : number[] = [3, 10, 5, 8, 11, 4, 7];

//prints out the index
console.log("For in loop");
for (let player in players) {
  console.log(player);
}

//prints out the value
console.log("For of loop");
for (let player of players) {
  console.log(player);
}