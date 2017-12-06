var names = ["Shane", "Someone", "Meh"];
var counter = 0;
(function () {
    for (var name_1 in names) {
        counter++;
    }
})();
console.log(counter);
console.log("Immediately invoked function 1");
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName("Shane", "Soderstrom"));
console.log("Immediately invoked function 2");
(function (first, last) {
    console.log(first + " " + last);
})("Shane", "Soderstrom");
//# sourceMappingURL=immediately_invoked_functions.js.map