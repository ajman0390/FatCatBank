"use strict";

// Anonymous init function call for the calculate btn onclick to call the caculateCompound interest calculations function
window.onload = function () {
  document.getElementById("btnCompound").onclick = calculateCompound;
}

/*
* This funciton calculates the future value of a on-time 
* deposit assuming compounded interest
* Function's Math: A=p(1+(r/n))^(nt); n = 1 for this function
*/
function calculateCompound() {
  let prinComp = document.getElementById("principalCompound").value; // deposit 
  let termComp = document.getElementById("termCompound").value; // no. of years
  let rateComp = document.getElementById("interestCompound").value; // interest rate

  // The equation is A = p * [[1 + (r/n)] ^ nt]; n = 1 for this function
  let amt = (prinComp * Math.pow((1 + (rateComp / (1 * 100))), (1 * termComp)));

  // toFixed is used for rounding the amount with two decimal places.           
  document.getElementById("compOutput-01").value = amt.toFixed(2);
  document.getElementById("compOutput-02").value = (amt.toFixed(2) - prinComp).toFixed(2);
}