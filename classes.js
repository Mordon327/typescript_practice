var Invoice = /** @class */ (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + " " + city + " " + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice("Google", "Seattle", "Washington");
var yahooInvoice = new Invoice("Yahoo", "San Fran", "California");
console.log(googleInvoice.companyProfile);
console.log(googleInvoice.name);
console.log(googleInvoice.city);
console.log(googleInvoice.state);
console.log(yahooInvoice.companyProfile);
//# sourceMappingURL=classes.js.map