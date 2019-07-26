"use strict";
var term;
var apr;
var amt;
var mPmt;
var monthTerm;
var termPay;


window.onload = function()
{
  document.getElementById("apr").focus();
  document.getElementById("calcBtn").onclick = getValues;
};

//use toFixed(2) to set the precision of the mPayment. Use it on an int.
function getValues()
{
  term = document.getElementById("trm").value;
  apr = document.getElementById("apr").value;
  amt = document.getElementById("amt").value;
  apr /= 1200;
  monthTerm = term * 12;
  mPmt = calculatePayment();
  termPay = calculateLoanAmount();
  document.getElementById("pmt").value = "$" + mPmt.toFixed(2);
  document.getElementById("pmtTotal").value = "$" + termPay.toFixed(2);
}

function calculatePayment()
{
	var payment = amt*(apr * Math.pow((1 + apr), monthTerm))/(Math.pow((1 + apr), monthTerm) - 1);
	return payment;
}

function calculateLoanAmount()
{
    var loanAmt = mPmt * monthTerm;
    return loanAmt;
}