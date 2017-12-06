var realUser = {
  email: 'test@test.com',
  firstName: 'Shane',
  lastName: 'Soderstrom',
  sayHi() {
    return "Hey there!";
  },
  sayBye() {
    return "Bye there!";
  }
};

console.log(realUser.sayHi());
console.log(realUser.sayBye());