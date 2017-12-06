class Invoice {
  companyProfile : string;

  constructor(public name, public city, public state) {
    this.companyProfile = name + " " + city + " " + state;
  }
}

var googleInvoice = new Invoice("Google", "Seattle", "Washington");
var yahooInvoice = new Invoice("Yahoo", "San Fran", "California");

console.log(googleInvoice.companyProfile);
console.log(googleInvoice.name);
console.log(googleInvoice.city);
console.log(googleInvoice.state);
console.log(yahooInvoice.companyProfile);
