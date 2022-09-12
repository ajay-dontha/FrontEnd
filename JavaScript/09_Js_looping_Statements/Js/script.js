/**
 * for
 * while
 * dowhile
 */

//for
//(print 1-10)
var number="";
for(let i=1;i<=10;i++){
    number+i;
    //console.log(number+i);
}
//(print 10-1)
var number="";
for(let i=10;i>=1;i--){
    number+i;
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
 * for loop stops executing
 */

//to ptint even numbers
for(let i=1;i<=20;i++){
    if(i%2==0){
      //console.log(+i);  
    }
}

//to ptint odd numbers
for(let i=1;i<=20;i++){
    if(i%3==0){
      //console.log(+i);  
    }
}

//to ptint 9 table
for(let i=9;i<=90;i++){
    if(i%9==0){
      console.log(+i);  
    }
}
