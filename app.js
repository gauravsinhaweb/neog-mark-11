var dob = document.querySelector("#date");
var luckyNum = document.querySelector("#lucky-number");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");

function compareValue(sum, luckyNum) {
  if (sum % luckyNum === 0) {
    output.innerText = "Your Birthday is Lucky 🚀";
    output.style.backgroundColor = "#10B981";
  } else {
    output.innerText = "Your Birthday is not that Lucky 😗";
    output.style.backgroundColor = "#EF4444";
  }
}

function CheckBirthDateLucky() {
  var dobValue = dob.value;
  const sum = checkSum(dobValue);
  compareValue(sum, luckyNum.value);
}
function checkSum() {
  const dobValue = dob.value.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dobValue.length; index++) {
    sum = sum + Number(dobValue.charAt(index));
  }
  return sum;
}
btn.addEventListener("click", CheckBirthDateLucky);
