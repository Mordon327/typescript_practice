//boolean
let paidAccounts : boolean = false;

//numbers
let age : number = 33.25;

//string
var fullName : string = "Shane Soderstrom";

//array
var ages : number[] = [33, 55, 21];

//tuple
let player : [number, string, number];
player = [3, 'Corerra', 42.5];

//enum
enum Stage {Approved, Pending, Rejected};
let job : Stage = Stage.Approved;

//any, only used when there arn't ANY other options.
var apiData : any[] = [123, "Some Name", false]

//void, a return type that returns nothing. Can be changed to number, string...
function printOut(msg: string) : void {
  console.log(msg);
}