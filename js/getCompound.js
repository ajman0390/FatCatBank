"use strict";
var principal = 0;
var interestRate = 0;
var timesCompounded = 0;
var termOfLoan = 0;
var amount = 0;

window.onload = function()
{
  document.getElementById("btnCompound").onclick = calculate;
}

function calculate()
            {
                var p = document.getElementById("principalCompound").value;
                
                var t = document.getElementById("termCompound").value; // no. of years
                var r = document.getElementById("interestCompound").value;
                // result = document.getElementById("result");

                // The equation is A = p * [[1 + (r/n)] ^ nt]
                var A = (p* Math.pow((1 + (r/(1*100))), (1*t)));

                // toFixed is used for rounding the amount with two decimal places.

                console.log(A);
                
                

                document.getElementById("ciOutput-01").value = A.toFixed(2);

                document.getElementById("ciOutput-02").value =  (A.toFixed(2) - p).toFixed(2);
            }