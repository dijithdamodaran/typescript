var company="it-vedant";
let city="hyd";
const pincode="677881";
console.log("company"+ company);

let num1=10;
let num2=20;
let sum=num1+num2;
console.log("sum :" +sum);

let r=10;
let pai=3.14;
let a=pai*(r)^2
console.log("area :"+a)


console.log(num1+">"+num2+":"+(num1>num2));
console.log(num1+">="+num2+":"+(num1>=num2));
console.log(num1+"<"+num2+":"+(num1<num2));
console.log(num1+"<="+num2+":"+(num1<=num2));
console.log(num1+"!="+num2+":"+(num1!=num2));
console.log(num1+"=="+num2+":"+(num1==num2));


let i;
for(i=1;i<=7;i++)
{
  console.log("hello: "+i);
  if(i%2==0)
  {
    console.log(i+"evennumber");
  }
    else{
      console.log(i+"oddnumber");
    }

}





//let j;
let fact=1;  
  let number=6
  
  for(i=1;i<=number;i++){    
      fact=fact*i;    
  }    
  console.log("Factorial of "+number+" is: "+fact);    

let k =1;
while(k<=10){
  console.log("hello all..")
  k++
}

let numbers : number[]=[1,2,3,4,5,6,7];
console.log(numbers);
  for (let i=0; i<7;i++){
    console.log("hello:"+i +"numbers :"+ numbers[i]);
    
  }
  for(let n of numbers){
    console.log(n);
  }

  /*let k=1;
  while(k<=10){
    console.log("***hello***");
    k++;
  }*/


  //functions

  function addition(){
    let l1=2,l2=5;
    let result=l1+l2;
    console.log("result of addition : " +result);
  }
  addition();

  //class and object
  class person{
    name: string;
    email:string;
    age:number;
    //default
    /*constructor(){
      this.name="ananda";
      this.email="an@gmail.com";
      this.age=27;
    }*/

    //paramiterized
    constructor(name:string,email:string,age:number){
      this.name=name;
      this.email=email;
      this.age=age;
    }
    displayperson():string{
      return `${this.name} ${this.email} ${this.age}`;
    } 
  }

  const person1=new person("nikil",'kas@gmail.com',23);
  console.log(person1.displayperson());