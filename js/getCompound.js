"use strict";

// Anonymous init function call for the calculate btn onclick to call the caculateCompound interest calculations function
window.onload = function () {
  document.getElementById("btnCompound").onclick = calculateCompound;
  document.getElementById("resetBtn").onclick = doReset;
}

/*
* This funciton calculates the future value of a on-time 
* deposit assuming compounded interest
* Function's Math: A=p(1+(r/n))^(nt); n = 1 for this function
*/
function calculateCompound() {
  let prinComp = document.getElementById("principalCompound").value; // deposit 
  validateForm(prinComp);
  let termComp = document.getElementById("termCompound").value; // no. of years
  validateForm(termComp);
  let rateComp = document.getElementById("interestCompound").value; // interest rate
  validateForm(rateComp);

  // The equation is A = p * [[1 + (r/n)] ^ nt]; n = 1 for this function
  let amt = (prinComp * Math.pow((1 + (rateComp / (1 * 100))), (1 * termComp)));

  // toFixed is used for rounding the amount with two decimal places.           
  document.getElementById("compOutput-01").value = amt.toFixed(2);
  document.getElementById("compOutput-02").value = (amt.toFixed(2) - prinComp).toFixed(2);
}

/*
* This funciton checks the inputs to ensure positive values were entered  
* 
* @param inputCheck (Number) - The value to be checked
*
*/
function validateForm(inputCheck) {
  if ((isNaN(inputCheck)) || (inputCheck < 0)) {
    document.getElementById("bottomP").innerHTML = "The input was not correct. Please input valid positive numbers";
  } 
}

/*
* This funciton removes input error message   
*
*/
function doReset() {
  document.getElementById("bottomP").innerHTML = "";
}