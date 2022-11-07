//Business Logic
function beepBoop(number, name) {
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
      arrayNums.push("Won't you be my neighbor, " + name + "?");
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
  const name = document.getElementById("name").value;
  if (num < 0) { //error handling 
    document.getElementById("outputText").innerText = "Please Enter a number 0 or above";
  }
  else {
    const output = beepBoop(num, name);
    document.getElementById("outputText").innerText = output.join(", ");
  }
}

function scrollToBottom() {
  document.getElementById("pageBottom").scrollIntoView();
}

window.addEventListener("load", function () {
  this.document.getElementById("inputForm").addEventListener("submit", processOutput);
  this.document.getElementById("scroll").addEventListener("click", scrollToBottom);
});