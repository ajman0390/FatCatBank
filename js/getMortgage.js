"use strict";

// Anonymous init function call for the calculate btn onclick to call the doCalculate function
window.onload = function () {
  document.getElementById("calcBtn").onclick = doCalculate;
  document.getElementById("resetBtn").onclick = doReset; 
}

/*
* This funciton calls calculatePayment, calculateLoanAmount to 
* calculate the mortgage monthly payments and the total costs of the loan 
*/
function doCalculate() {
  let term = document.getElementById("trm").value;
  validateForm(term); // calls validateForm to check for positive values 
  let apr = document.getElementById("apr").value;
  validateForm(apr);
  let amt = document.getElementById("amt").value;
  validateForm(amt);
  apr /= 1200;
  let monthTerm = term * 12;
  let mPmt = calculatePayment(amt, apr, monthTerm);
  let termPay = calculateLoanAmount(mPmt, monthTerm);
  document.getElementById("pmt").value = mPmt.toFixed(2); //toFixed(2) to set the precision
  document.getElementById("pmtTotal").value = termPay.toFixed(2);
}

/*
* This funciton calculates the monthly payment of the mortgage  
* 
* @param amt (Number) - The home price amount
* @param apr (Number) - The annual interest rate
* @param monthTerm (Number) - The term of the loan in months
*
* @return payment (Number) - The monthly payment amount
*/
function calculatePayment(amt, apr, monthTerm) {
  let payment = amt * (apr * Math.pow((1 + apr), monthTerm)) / (Math.pow((1 + apr), monthTerm) - 1);
  return payment;
}

/*
* This funciton calculates the monthly payment of the mortgage  
* 
* @param mPmt (Number) - The monthly payment amount 
* @param monthTerm (Number) - The term of the loan in months
*
* @return loanAmt (Number) - The total costs of the loan
*/
function calculateLoanAmount(mPmt, monthTerm) {
  let loanAmt = mPmt * monthTerm;
  return loanAmt;
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