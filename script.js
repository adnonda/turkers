var btn = document.getElementById("btn"),
    btn2 = document.getElementById("btn2"),
    btn3 = document.getElementById("btn3"),
    stopText = document.getElementById("stop-text"),
    resultSec = document.getElementById("seconds"),
    nodSec = 0,
    resSec = parseInt(nodSec, 10),
    resultMin = document.getElementById("minutes"),
    nodMin = 0,
    resMin = parseInt(nodMin, 10),
    resultHrs = document.getElementById("hours"),
    nodHrs = 0,
    resHrs = parseInt(nodHrs, 10),
    intervalID,
    counter4draw = resSec,
    counter4drawmin = 0,
    canvas = document.getElementById("mycanvas"),
    context = canvas.getContext("2d"),
    canvas2 = document.getElementById("mycanvas2"),
    context2 = canvas2.getContext("2d"),
    canvas4 = document.getElementById("mycanvas4"),
    context4 = canvas4.getContext("2d"),
    canvas3 = document.getElementById("mycanvas3"),
    context3 = canvas3.getContext("2d"),
    canvas6 = document.getElementById("mycanvas6"),
    context6 = canvas6.getContext("2d"),
    canvas5 = document.getElementById("mycanvas5"),
    context5 = canvas5.getContext("2d"),
    dynamicCircle = {lineWidth : 11, centerX : 185, centerY : 185, ray : 124, pathStart : 0, inverse : false, strokeStyle : "#4CE8FF", fillStyle : "rgba(0,0,255,0)"},
    staticCircle = {lineWidth : 10, centerX : 185, centerY : 185, ray : 124, pathStart : 0, inverse : false, strokeStyle : "#005b7f", fillStyle : "rgba(0,255,0,0)"};

const stopTime = [
    {
        'startTime': 0,
        'endTime': 5,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,002 €'
    },
    {
        'startTime': 5,
        'endTime': 10,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,004 €'
    },
    {
        'startTime': 10,
        'endTime': 15,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,008 €'
    },
    {
        'startTime': 15,
        'endTime': 20,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,01 €'
    },
    {
        'startTime': 20,
        'endTime': 25,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,015 €'
    },
    {
        'startTime': 25,
        'endTime': 30,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,018 €'
    },
    {
        'startTime': 30,
        'endTime': 35,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,022 €'
    },
    {
        'startTime': 35,
        'endTime': 40,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,024 €'
    },
    {
        'startTime': 40,
        'endTime': 45,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,028 €'
    },  
    {
        'startTime': 45,
        'endTime': 50,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,03 €'
    }, {
        'startTime': 50,
        'endTime': 60,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,038 €'
    },  {
        'startTime': 60,
        'endTime': 80,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,048 €'
    }, {
        'startTime': 80,
        'endTime': 110,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,065 €'
    },  {
        'startTime': 110,
        'endTime': 140,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,09 €'
    },  {
        'startTime': 140,
        'endTime': 200,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,12 €'
    },  {
        'startTime': 200,
        'endTime': 400,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,21 €'
    },  {
        'startTime': 400,
        'endTime': 700,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,4 €'
    },  {
        'startTime': 700,
        'endTime': 900,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,55 €'
    },  {
        'startTime': 900,
        'endTime': 1200,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,69 €'
    },  {
        'startTime': 1200,
        'endTime': 1400,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 0,9 €'
    },  {
        'startTime': 1400,
        'endTime': 1500,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 1 €'
    },
    {
        'startTime': 1500,
        'endTime': 1600,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 1,1 €'
    },
    {
        'startTime': 1600,
        'endTime': 1700,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 1,2 €'
    },
    {
        'startTime': 1700,
        'endTime': 1900,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 1,3 €'
    },
    {
        'startTime': 1900,
        'endTime': 2100,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 1,4 €'
    },
    {
        'startTime': 2100,
        'endTime': 2300,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 1,5 €'
    },
    {
        'startTime': 2300,
        'endTime': 2500,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 1,6 €'
    },  {
        'startTime': 2500,
        'endTime': 2600,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 1,7 €'
    },  {
        'startTime': 2600,
        'endTime': 2700,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 1,8 €'
    },  {
        'startTime': 2700,
        'endTime': 2800,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 1,9 €'
    },  {
        'startTime': 2800,
        'endTime': 3000,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 2,0 €'
    },  {
        'startTime': 3000,
        'endTime': 3100,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 2,1 €'
    },  {
        'startTime': 3100,
        'endTime': 3200,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 2,2 €'
    },  {
        'startTime': 3200,
        'endTime': 3300,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 2,3 €'
    },  {
        'startTime': 3300,
        'endTime': 3400,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 2,4 €'
    },  {
        'startTime': 3400,
        'endTime': 3500,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 2,45 €'
    },  {
        'startTime': 3500,
        'endTime': 3600,
        'textToDisplay': 'According to turkers’ average salary, for this HIT you earned 2,5 €'
    },
]

    
function btnTrigger(arg1, arg2, arg3) {
    "use strict";
    btn.disabled = arg1;
    btn2.disabled = arg2;
    btn3.disabled = arg3;
}

function sec2Rad(sec) {
    "use strict";
    var factor = Math.PI / 30;
    return factor * sec;
}

function circleDraw(ctx, circle, pe) {
    "use strict";
    ctx.lineWidth = circle.lineWidth;
    ctx.beginPath();
    
}

function circleReset() {
    "use strict";
   
    counter4draw = 1;
    circleDraw(context, dynamicCircle, sec2Rad(counter4draw));
    counter4draw += 1;
}

function circleReset2() {
    "use strict";
    circleDraw(context3, dynamicCircle, sec2Rad(counter4drawmin));
    context3.clearRect(0, 0, 450, 450);
    counter4drawmin = 1;
    circleDraw(context3, dynamicCircle, sec2Rad(counter4drawmin));
}





function convert2Digits(num) {
    "use strict";
    var str;
    if (num < 10) { str = "0" + num.toString(); } else { str = num.toString(); }
    return str;
}

function convert2Minutes() {
    "use strict";
    if (resSec >= 60) { resMin += 1; resSec = 0; counter4drawmin += 1; circleDraw(context3, dynamicCircle, sec2Rad(counter4drawmin)); }
}

function convert2Hours() {
    "use strict";
    if (resMin >= 60) { resHrs += 1; resMin = 0; }
    if (counter4drawmin > 60) { circleReset2(); }
    circleDraw(context5, dynamicCircle, sec2Rad(resHrs));
}

function ajoutSec() {
    "use strict";
    resSec += 1;
    convert2Minutes();
    convert2Hours();
    resultSec.innerHTML = convert2Digits(resSec);
    resultMin.innerHTML = convert2Digits(resMin);
    resultHrs.innerHTML = convert2Digits(resHrs);
    circleDraw(context, dynamicCircle, sec2Rad(counter4draw));
    counter4draw += 1;
    if (counter4draw > 61) { circleReset(); }
}

function startCounter() {
    "use strict";
    stopText.innerText = '';
    resSec -= 1;
    window.clearInterval(intervalID);
    intervalID = window.setInterval(ajoutSec, 1000);
    ajoutSec();
    btnTrigger(true, false, false);
}

function pauseCounter() {
    "use strict";
    counter4draw -= 1;
    resSec -= 1;
    counter4draw -= 1;
    window.clearInterval(intervalID);
    ajoutSec();
    btnTrigger(false, true, false);
}

function stopCounter() {
    "use strict";
    displayTextOnStop();
    window.clearInterval(intervalID);
    resSec = 0;
    resMin = 0;
    resHrs = 0;
    resultSec.innerHTML = "00";
    resultMin.innerHTML = "00";
    resultHrs.innerHTML = "00";
    counter4draw = 0;
    counter4drawmin = 0;
    resHrs = 0;
    context.clearRect(0, 0, 450, 450);
    context3.clearRect(0, 0, 450, 450);
    context5.clearRect(0, 0, 450, 450);
    btnTrigger(false, true, true);
}

btn.addEventListener("click", startCounter);
btn2.addEventListener("click", pauseCounter);
btn3.addEventListener("click", stopCounter);


const displayTextOnStop = () => {
    // count the result time in seconds
    let currentTimeInSeconds = resHrs * 3600 + resMin * 60 + resSec;
  
    stopTime.forEach(timeInterval => {
        if (currentTimeInSeconds > timeInterval.startTime && currentTimeInSeconds <= timeInterval.endTime) {
            console.log(timeInterval.textToDisplay);
            stopText.innerText = timeInterval.textToDisplay;
        }
    });
};

