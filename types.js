//boolean
var paidAccounts = false;
//numbers
var age = 33.25;
//string
var fullName = "Shane Soderstrom";
//array
var ages = [33, 55, 21];
//tuple
var player;
player = [3, 'Corerra', 42.5];
//enum
var Stage;
(function (Stage) {
    Stage[Stage["Approved"] = 0] = "Approved";
    Stage[Stage["Pending"] = 1] = "Pending";
    Stage[Stage["Rejected"] = 2] = "Rejected";
})(Stage || (Stage = {}));
;
var job = Stage.Approved;
//any, only used when there arn't ANY other options.
var apiData = [123, "Some Name", false];
//void, a return type that returns nothing. Can be changed to number, string...
function printOut(msg) {
    console.log(msg);
}
//# sourceMappingURL=types.js.map