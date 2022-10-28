//Business Logic
function beepBoop(number) {
  const arrayNums = [];
  for (let i = 0; i < number; i++) {
    let num = i.toString();
    let type = 0; //1 === Beep!, 2 === Boop!
    for(let j = 0; j < num.length;j++){
      if (num[j] === "2"){
        type = 2;
        break;
      }
      else if(num[j] === "1" && type !== 2){
        type = 1;
      }
    }
    if(type === 1){ //insert Beep!
      arrayNums.push("Beep!");
    }
    else if(type === 2){
      arrayNums.push("Boop!");
    }
    else{
      arrayNums.push(i);
    }
    
  }
  return arrayNums;
}


//UI logic
window.addEventListener("load", function () {

});