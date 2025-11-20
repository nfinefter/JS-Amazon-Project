import { formatCurrency} from "../scripts/utils/money.js";

console.log('Test Suite: formatCurrency');

console.log('Convert cents into dollars');

if (formatCurrency(2095) === '20.95') {
  console.log("All tests passed!");
} else {
  console.log("Some tests failed.");
}
if (formatCurrency(100) === '1.00') {
  console.log("All tests passed!");
} else {    
  console.log("Some tests failed.");
}
if (formatCurrency(0) === '0.00') {
  console.log("All tests passed!");
} else {
  console.log("Some tests failed.");
}
if (formatCurrency(123456) === '1234.56') {
  console.log("All tests passed!");
} else {
  console.log("Some tests failed.");
}
if (formatCurrency(1000) === '10.00') {
  console.log("All tests passed!");
} else {
  console.log("Some tests failed.");
}