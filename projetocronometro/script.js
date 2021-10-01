let hour = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let crono;

//Events
document.querySelector('.initial').addEventListener('click', start);
document.querySelector('.pause').addEventListener('click', pause);
document.querySelector('.stop').addEventListener('click', Stop);


//Functions
function start() {
    pause();
    crono = setInterval(()=> {timer();}, 10);
}
function pause() {
    clearInterval(crono);
}
function Stop() {
    hour = 0;
    minutes = 0;
    seconds = 0;
    miliseconds = 0;

    document.querySelector('.hours').innerHTML = '00';
    document.querySelector('.minutes').innerHTML = '00';
    document.querySelector('.seconds').innerHTML = '00';
    document.querySelector('.miliseconds').innerHTML = '000';
}

//Function Timer
function timer() {
    if((miliseconds += 10) == 1000) {
        miliseconds = 0;
        seconds++;
    }
    if(seconds == 60) {
        seconds = 0;
        minutes++;
    } 
    if(minutes == 60) {
        minutes = 0;
        hour++;
    }

    document.querySelector('.hours').innerHTML = returnData(hour);
    document.querySelector('.minutes').innerHTML = returnData(minutes);
    document.querySelector('.seconds').innerHTML = returnData(seconds);
    document.querySelector('.miliseconds').innerHTML = returnData(miliseconds)
}

function returnData(e) {
    return e > 10 ? e : `0${e}`
  }