/**
 * Set TimeOut()
 * *it executed based on certain time.
 */
const myTimeOut=setTimeout(myGreeting,5000);
function myGreeting(){
   // console.log("Happy Birthday");
}

/**
 * Set Interval()
 * repeatedly executed based on certain time.
 */
const mySetInterval=setInterval(alarm,5000);
function alarm(){
    //console.log("Join Class");
    document.getElementById("display").innerHTML+="Join Class Guys";
}