//Business Logic
function beepBoop(number) {
  const arrayNums = [];
  for (let i = 0; i <= number; i++) {
    let num = i.toString();
    let type = 0; //1 === Beep!, 2 === Boop!, 3 === Won't you be my neighbor?
    for (let j = 0; j < num.length; j++) {
      if (num[j] === "3") {
        type = 3;
        break;
      }
      else if (num[j] === "2" && type < 2) {
        type = 2;
      }
      else if (num[j] === "1" && type < 1) {
        type = 1;
      }
    }
    if (type === 1) { //insert Beep!
      arrayNums.push("Beep!");
    }
    else if (type === 2) {//insert Boop!
      arrayNums.push("Boop!");
    }
    else if (type === 3) {//insert Won't you be my neighbor?
      arrayNums.push("Won't you be my neighbor?");
    }
    else {
      arrayNums.push(i);
    }

  }
  return arrayNums;
}


//UI logic
function processOutput(event) {
  event.preventDefault();
  const num = document.getElementById("numberBox").value;
  const output = beepBoop(num);
  document.getElementById("outputText").innerText = output.toString();
}

window.addEventListener("load", function () {
  this.document.getElementById("inputForm").addEventListener("submit", processOutput);
});