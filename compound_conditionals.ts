let password : string = "asdfasdf";
let email : string = "test@test.com";

if (password == 'asdfasdf' && email == "test@test.com") {
  console.log("permission granted");
} else {
  console.log("Permission denied");
}

if (!(email == 'test@test.com')) {
  console.log('You are not authorized')
}