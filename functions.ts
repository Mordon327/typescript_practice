var fullName = (first, last) => {
  return first + " " + last;
}

function fullNameTwo (first, last) {
  return first + " " + last;
}

console.log(fullName("Shane", "Soderstrom"));
console.log(fullNameTwo("Shane", "Soderstrom"));

//a function that requires a number and mush return a string
function gradeGenerator(grade: number) : string {
  if (grade < 60)
  return "F";
  else if (grade >= 60 && grade < 70)
    return "D";
  else if (grade >= 70 && grade < 80)
    return "C";
  else if (grade >= 80 && grade < 90)
    return "B";
  else
    return "A";
}

console.log(gradeGenerator(99));
console.log(gradeGenerator(89));
console.log(gradeGenerator(79));
console.log(gradeGenerator(69));
console.log(gradeGenerator(59));
