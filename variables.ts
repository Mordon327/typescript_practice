var fullName : string = "Shane Soderstrom";
let paidAccount : boolean = true;
const versionNumber : number = 1.3;

console.log(fullName);
console.log(paidAccount);
console.log(versionNumber);

fullName = "My new name";
paidAccount = false;
console.log(fullName);
console.log(paidAccount);

function printName(f, l) {
  let greeting : string = "Hi there, ";
  console.log(greeting + f + " " + l);

  greeting = "Hey there, ";
  console.log(greeting + f + " " + l);
}

printName("Shane", "Soderstrom");