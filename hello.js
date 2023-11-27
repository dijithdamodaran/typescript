var company = "it-vedant";
var city = "hyd";
var pincode = "677881";
console.log("company" + company);
var num1 = 10;
var num2 = 20;
var sum = num1 + num2;
console.log("sum :" + sum);
var r = 10;
var pai = 3.14;
var a = pai * (r) ^ 2;
console.log("area :" + a);
console.log(num1 + ">" + num2 + ":" + (num1 > num2));
console.log(num1 + ">=" + num2 + ":" + (num1 >= num2));
console.log(num1 + "<" + num2 + ":" + (num1 < num2));
console.log(num1 + "<=" + num2 + ":" + (num1 <= num2));
console.log(num1 + "!=" + num2 + ":" + (num1 != num2));
console.log(num1 + "==" + num2 + ":" + (num1 == num2));
var i;
for (i = 1; i <= 7; i++) {
    console.log("hello: " + i);
    if (i % 2 == 0) {
        console.log(i + "evennumber");
    }
    else {
        console.log(i + "oddnumber");
    }
}
//let j;
var fact = 1;
var number = 6;
for (i = 1; i <= number; i++) {
    fact = fact * i;
}
console.log("Factorial of " + number + " is: " + fact);
var k = 1;
while (k <= 10) {
    console.log("hello all..");
    k++;
}
var numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);
for (var i_1 = 0; i_1 < 7; i_1++) {
    console.log("hello:" + i_1 + "numbers :" + numbers[i_1]);
}
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var n = numbers_1[_i];
    console.log(n);
}
/*let k=1;
while(k<=10){
  console.log("***hello***");
  k++;
}*/
//functions
function addition() {
    var l1 = 2, l2 = 5;
    var result = l1 + l2;
    console.log("result of addition : " + result);
}
addition();
//class and object
var person = /** @class */ (function () {
    //default
    /*constructor(){
      this.name="ananda";
      this.email="an@gmail.com";
      this.age=27;
    }*/
    //paramiterized
    function person(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    person.prototype.displayperson = function () {
        return "".concat(this.name, " ").concat(this.email, " ").concat(this.age);
    };
    return person;
}());
var person1 = new person("nikil", 'kas@gmail.com', 23);
console.log(person1.displayperson());
