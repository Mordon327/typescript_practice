function printAddress(street: string, streetTwo?: string, state = "UT") {
  console.log(street);
  if(streetTwo)
    console.log(streetTwo);
  console.log(state);
}
console.log("One Street");
printAddress("123 Any St");
console.log("Two Street");
printAddress("123 Any St", "321 Many St");
printAddress("123 Any St", "321 Many St", "TX");

console.log("Splat or Rest argument")
function lineupCard(team: string, ...players: string[]) {
  console.log("Team: " + team);
  for (let player of players) {
    console.log(player);
  }
}

lineupCard("Landrovers", "Mosqitoe", "Rock", "Pavement", "Gnat", "Squashed");