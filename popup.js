const buttons = document.querySelectorAll('#buttonOuter > button');
const outer = document.querySelector('.outer');
const body = document.querySelector('body');
const startBtn = document.querySelector(".start")
const popup = document.querySelector('#popup');
const innerPopup = document.querySelector('.innerPopup');
let passedVal;

let passInfo = (val) => {
    passedVal = val.value;
    changeColours();
    val.style.backgroundColor = "#999";
        chrome.storage.local.set({ myVariable: val.value }, function() {
          })
    return passedVal;
}
startBtn.addEventListener('click', () =>{
    chrome.runtime.sendMessage('', function() {
    });
    outer.style.display = "none";
    popup.style.display = 'block';
    let timer = passedVal/60000;
    if(timer > 1)
        {innerPopup.innerHTML = `Your reminder will pop up in ${timer} minutes!`}
    else
        {innerPopup.innerHTML = `Your reminder will pop up in 10 seconds!`}


})
buttons.forEach(button =>{
    button.addEventListener('click', () => passInfo(button))
})

let changeColours = () =>{
    buttons.forEach(button =>{
        button.style.backgroundColor = "#333";
    })
}

//Your last selected timer was: X min, started at Y and will remind at Z