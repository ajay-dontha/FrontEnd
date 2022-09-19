/**
 * for 
 * for of
 * for in
 * for each
 */

//for 
for (i = 0; i <= 10; i++) {
    //console.log(i)
}

//for of
let student = [{
    fstName: "shiva",
    lstName: "shakthi",
    email: "shivashakthi@gmail.com"
},
{
    fstName: "sai",
    lstName: "kumar",
    email: "saikumar@gmail.com"
},
{
    fstName: "adi",
    lstName: "tya",
    email: "aditya@gmail.com"
}
]
//for of
for (const name of student) {
    // console.log(name);
}

for (const s in student) {
    //console.log(s)
}

student.forEach(element => {
    console.log(element);
});
