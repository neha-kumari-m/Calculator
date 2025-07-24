const clear = document.getElementById("clear");
const calculation =document.getElementById("calculation");
const result = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");
const equalsbtn = document.querySelector(".equalsbtn");

buttons.forEach(btn => {
    btn.addEventListener("click",event => {
        const clickedValue = event.target.textContent;
        calculation.innerHTML += clickedValue;
    });
});

equalsbtn.addEventListener("click",async event => {
    const expression = calculation.innerHTML;
    let symbols = ["+","-","X","÷","%"];
    for(let symbol of symbols){
        if(expression.includes(symbol)){
            let position = expression.indexOf(symbol);
            let num1 = Number(expression.slice(0,position));
            let num2 = Number(expression.slice(position+1));
            let answer = await claculateResult(num1,num2,symbol);
            result.innerHTML = answer;
            return;
        }
    }

});

function claculateResult(num1,num2,symbol){
    switch(symbol){
        case "+" : return num1 + num2;
        case "-" : return num1 - num2;
        case "X" : return num1 * num2;
        case "÷" : return num1/num2;
        case "%" : return num1%num2;
    }
}

clear.addEventListener("click",event => {
    calculation.innerHTML = "";
    result.innerHTML = "";
});