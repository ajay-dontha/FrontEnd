let  college=[{
    fstName: "shiva",
    lstName: "shakthi",
    email: "shivashakthi@gmail.com",
    age: 25,
},
{
    fstName: "sai",
    lstName: "kumar",
    email: "saikumar@gmail.com",
    age: 22,
},
{
    fstName: "adi",
    lstName: "tya",
    email: "aditya@gmail.com",
    age: 18,
},
{
    fstName: "ajay",
    lstName: "D",
    email: "ajay@gmail.com",
    age: 24,
}
];

college.forEach(element => {
    //console.log(element);
});

//filter is used to filter data
let mycollege=college.filter((element)=>element.age>18);
console.log(mycollege);

//map is used to transform the data
let UpperCase=college.map((element=>element.fstName.toUpperCase()));
console.log(UpperCase);
