var names :string[] = ["Shane", "Someone", "Meh"];
var counter : number = 0;

(function() {
  for (let name in names) {
    counter++;
  }
})();

console.log(counter);

console.log("Immediately invoked function 1");
var fullName : (first : string, last : string) => string;
fullName = function(first : string, last : string) {
  return first + " " + last;
}

console.log(fullName("Shane", "Soderstrom"));

console.log("Immediately invoked function 2");
(function(first : string, last : string) {
  console.log(first + " " + last);
})("Shane", "Soderstrom");
