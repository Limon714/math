var num1 = prompt ("Enter the first number:");
var num2 = prompt ("Enter the second number:");


num1 = parseInt(num1,10);
num2 = parseInt(num2,10);

var sum, sub, multiple, div, rem, exponent, percentage;
sum = num1 + num2;
sub = num1 - num2;
multiple = num1 * num2;
div = num1 / num2;
rem = num1 % num2;
exponent = num1 ** num2;
percentage = multiple / 100;
document.write(num1+ "+" +num2+ "=" +sum+ "<br/>" + "<br/>");
document.write(num1+ " - " +num2+ "=" +sub+ "<br/>" + "<br/>");
document.write(num1+ " x " +num2+ "=" +multiple+ "<br/>" + "<br/>");
document.write(num1+ "-:-" +num2+ "="
+div+ "<br/>" + "<br/>");
document.write(num1+ "%" +num2+ "="
+rem+ "<br/>" + "<br/>");
document.write(num1+ "*" +num2+ "="
+percentage+ "%" +"<br/>" + "<br/>");
document.write(num1+ " ^ " +num2+ "="
+exponent);
