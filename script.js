const second = document.querySelector(".second");
const minute = document.querySelector(".minutes");
const hour = document.querySelector(".hours");

const playBtn = document.querySelector(".play");
const restartBtn = document.querySelector(".restart");

// Detik
let secondValue = second.textContent;
let secondValueR = Number(secondValue[1]);
let secondValueL = Number(secondValue[0]);

// Menit
let minuteValue = minute.textContent;
let minuteValueR = Number(minuteValue[1]);
let minuteValueL = Number(minuteValue[0]);

// Jam
let hourValue = hour.textContent;
let hourValueR = Number(hourValue[1]);
let hourValueL = Number(hourValue[0]);

let timer;

let counter = 1;

playBtn.addEventListener("click", function(){
    counter++;

    if(counter % 2 === 0){
        playBtn.textContent = "Pause";
        playBtn.style.backgroundColor = "khaki";
        timer = setInterval(() => {

            secondValueR++;
            if(secondValueR === 10){
                secondValueL++;
                secondValueR = 0;
            }
    
            if(secondValueL === 6){
                minuteValueR++;
                secondValueL = 0;
            }
    
            if(minuteValueR === 10){
                minuteValueL++;
                minuteValueR = 0;
            }
    
            if(minuteValueL === 6){
                hourValueR++;
                minuteValueL = 0;
            }
    
            if(minuteValueR === 10){
                hourValueL++;
                hourValueR = 0;
            }
    
    
            secondValue = String(secondValueL)+String(secondValueR);
            second.textContent = secondValue;
            minuteValue =String(minuteValueL)+String(minuteValueR);
            minute.textContent = minuteValue;
            hourValue =String(hourValueL)+String(hourValueR);
            hour.textContent = hourValue;
        }, 1);
    } else{
        clearInterval(timer);
        playBtn.textContent = "Play";
        playBtn.style.backgroundColor = "aquamarine";
    }

})

restartBtn.addEventListener("click", function(){
    clearInterval(timer);
    playBtn.textContent = "play";
    playBtn.style.backgroundColor = "aquamarine";
    counter = 1;
    secondValue = "00";
    minuteValue = "00";
    hourValue = "00";

    secondValueR = Number(secondValue[1]);
    secondValueL = Number(secondValue[0]);

    minuteValueR = Number(minuteValue[1]);
    minuteValueL = Number(minuteValue[0]);

    hourValueR = Number(hourValue[1]);
    hourValueL = Number(hourValue[0]);

    second.textContent = secondValue;
    minute.textContent = minuteValue;
    hour.textContent = hourValue;
})