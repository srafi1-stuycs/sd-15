/*
Team Blueberry Pancakes
Arif Roktim and Shakil Rafi
SoftDev1 pd7
HW15 -- Sequential Progression
2017-12-06
*/

console.log("Loaded js file");

var fibonacci = function (n) {
  if (n <= 0) 
    return 0;
  else if (n <= 2)
    return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

var gcd = function (a, b) {
  var t;
  while (b != 0) {
    t = b;
    b = a % b;
    a = t;
  }
  return a;
}

var students = [ 'Helen', 'Shakil', 'Eric', 'Jennifer Y', 'Jennifer Z', 'Arif', 'Queenie', 'Jawadul', 'Shaina', 'Vivien', 'Brian', 'Naotaka', 'Bayan', 'Adam', 'Caleb', 'Terry', 'Jason', 'Alessandro', 'Samantha', 'Carol', 'Joyce', 'Shannon', 'Charles', 'Taylor', 'Kelly', 'Leo', 'Khyber', 'Ibnul', 'Eugene', 'Yuyang', 'Karina', 'Tiffany', 'Holden', 'Michael'];
var randomStudent = function () {
  var rand = Math.floor(Math.random() * students.length);
  return students[rand];
}

console.log("Testing fibonacci...");
for (var i = 0; i < 10; i++) {
  console.log("fibonacci(" + i + ") returns: " + fibonacci(i));
}

console.log("Testing gcd...");
console.log("gcd(5, 10) returns: " + gcd(5, 10));
console.log("gcd(20, 30) returns: " + gcd(20, 30));
console.log("gcd(7, 11) returns: " + gcd(7, 11));
console.log("gcd(45, 15) returns: " + gcd(45, 15));
console.log("gcd(100, 350) returns: " + gcd(100, 350));

console.log("Testing randomStudent...");
for (var i = 0; i < 10; i++) {
  console.log("Here's a random student: " + randomStudent());
}
