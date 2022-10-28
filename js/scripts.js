//Business Logic
function beepBoop(number) {
  const arrayNums = [];
  for (let i = 0; i < number; i++) {
    let num = i.toString();
    let numInserted = false;
    for(let j = 0; j < num.length;j++){
      if(num[j] === "1"){
        arrayNums.push("Beep!");
        numInserted = true;
        break;
      }
    }
    if(!numInserted){
      arrayNums.push(i);
    }
    
  }
  return arrayNums;
}


//UI logic
window.addEventListener("load", function () {

});