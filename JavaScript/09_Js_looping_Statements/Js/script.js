/**
 * for
 * while
 * dowhile
 */

//for
//(print 1-10)
var number = "";
for (let i = 1; i <= 10; i++) {
  number + i;
  //console.log(number+i);
}
//(print 10-1)
var number = "";
for (let i = 10; i >= 1; i--) {
  number + i;
  //console.log(number+i);
}
/**
 * 0<=10=>true
 * num:0
 * i++==0+1
 * i=1
 * 
 * 1<=10=>true
 * num:1
 * i++==1+1
 * i=2
 * ...
 * 
 * 11<=10==>false
 * for loop terminates stops executing
 */

//to ptint even numbers
for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    //console.log(+i);  
  }
}

//to ptint odd numbers
for (let i = 1; i <= 20; i++) {
  if (i % 3 == 0) {
    //console.log(+i);  
  }
}

//to ptint 9 table
for (let i = 9; i <= 90; i++) {
  if (i % 9 == 0) {
    // console.log(+i);  
  }
}

/**
 * to print 5 table
 * {5*1=5} 
 * {5 *  = " "}
 * {5 dynamic}
 * */
let num = 5;
for (let i = 1; i <= 10; i++) {
  // console.log("5" + "*" + i + "=" + num * i);
}

//
let table = 10;
for (let i = 1; i <= 10; i++) {
  //console.log("10" + "/" + i + "=" + num / i);
}

//while loop
var i = 1;//initilization
var text = "num:";
while (i <= 10) {//condition
  //console.log(text+i);
  i++;//increment
}

//do while
var i = 0;
do {
  i++;
  console.log(+i);
} while (i < 10);
