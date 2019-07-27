"use strict";

// Anonymous init function call for the calculate btn onclick to call the getValues function
window.onload = function () {
  document.getElementById("calcBtn").onclick = getValues;
}

// getValues function calls calculatePayment, calculateLoanAmount and Output
function getValues() {
  let term = document.getElementById("trm").value;
  let apr = document.getElementById("apr").value;
  let amt = document.getElementById("amt").value;
  apr /= 1200;
  let monthTerm = term * 12;
  let mPmt = calculatePayment(amt, apr, monthTerm);
  let termPay = calculateLoanAmount(mPmt, monthTerm);
  document.getElementById("pmt").value = mPmt.toFixed(2); //toFixed(2) to set the precision
  document.getElementById("pmtTotal").value = termPay.toFixed(2);
}

// Calculates mothly payment, sends to getValues for output
function calculatePayment(amt, apr, monthTerm) {
  let payment = amt * (apr * Math.pow((1 + apr), monthTerm)) / (Math.pow((1 + apr), monthTerm) - 1);
  return payment;
}

// Calculates total loan amount, sends to getValues for output
function calculateLoanAmount(mPmt, monthTerm) {
  let loanAmt = mPmt * monthTerm;
  return loanAmt;
}