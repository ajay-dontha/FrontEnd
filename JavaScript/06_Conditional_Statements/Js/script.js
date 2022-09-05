/**
 * if
 * if else 
 * if else if else
 * nested if
 * ladder if
 */

// //If Condition {prints output if condition is true}
var age = 18;
if (age >= 18) {//condition
    console.log("Your Eligible");//statements
}

// //if using function with parameters
function eligibility(age) {
    console.log("Eligibility:");
    if (age > 18) {
        console.log("You are Eligible")
    }
}
eligibility(21);


// //If else Condition
var eligibility=22;
if(eligibility>=21){
    console.log("Your are Eligible");
}
else{
    console.log("Your are not Eligible");
}

// if else using function with parameters
function singareniEligibility(age){
    console.log("To Check Eligibility:");
    if(age>18){
        console.log("You are Eligible");
    }else{
        console.log("You are not Eligible")
    }
}
singareniEligibility(20);

//Functions using if else if else

function studentGrade(marks){
    if(marks>=26 && marks<=49){
        console.log("Third Class")
    }
    else if(marks>=50 && marks<=69){
        console.log("Secound Class")
    }
    else if(marks>=70 && marks<=74){
        console.log("First Class")
    }
    else if(marks>=75 && marks<=100){
        console.log("Distinction");
    }
    else{
        console.log("Invalid or Fail");
    }
}
studentGrade(prompt("Enter marks"));//we can use prompt in function call for entering marks dynamically.

//Ladder if {if after if}

var amount=(prompt("Enter Amounts"));
if(amount==1000){
    console.log("Amounts are equal")
}
if(amount>1000){
    console.log("Amount greater than 1000")
}
if(amount<1000){
    console.log("Amount less than 1000")
}

//Nested if {if inside the if}

function Eligibility(age){
    if(age>25){
        if(age>36){
            if(age>70){
                if(age>100){
                    console.log("You are a Hero");
                }
            }
        }
    }
}
Eligibility(prompt("Enter age"));





