//traditional function
function hello(){
    console.log("Hello")
}
hello();

//Arrow Functions =()=>{}
var hello=()=>{
    console.log(" Arrow function to display Hello");
}
hello();

//add numbers
let addUsingArrow=(a,b)=>{
    const sum=a+b;
    console.log(sum);
}
addUsingArrow(10,20);

//display name,age using arrow
let display=(student,age)=>{
    const displayValues=student+age;
    console.log(`${displayValues}`);//string literals
    console.log(student);
    console.log(age);
}
display("Abhi",26);

//obj using arrow function
let  college=[{
    fstName: "shiva",
    lstName: "shakthi",
    email: "shivashakthi@gmail.com",
    age: 25,
    salary:25000,
},
{
    fstName: "sai",
    lstName: "kumar",
    email: "saikumar@gmail.com",
    age: 22,
    salary:35000,
},
{
    fstName: "adi",
    lstName: "tya",
    email: "aditya@gmail.com",
    age: 18,
    salary:45000,
},
{
    fstName: "ajay",
    lstName: "D",
    email: "ajay@gmail.com",
    age: 24,
    salary:85000,
}
];

college.forEach((element)=>{
    console.log(element);
});

//filter 
let employee=college.filter((element)=>element.salary>25000);
console.log(employee);

//map
let employe=college.map((element)=>element.email.toUpperCase());
console.log(employe);