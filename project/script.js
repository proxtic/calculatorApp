// File Name: script.js
// Name: Grace Gundrum
// Created: 5/16/2023
// Description: File contains all JavaScript used in application

//buttons
const endtimeButton=document.getElementById("endTimeButton");
const totaltimeButton=document.getElementById("totalTimeButton");

//dont allow e to be entered
let hoursInput = document.getElementById("hoursInput");
hoursInput.addEventListener("keydown", function(event) {
    if (event.key === "e") {
        event.preventDefault();
    }
});

//event listener for button, adds hours to time and outputs in div
endtimeButton.addEventListener("click", function(){
    console.log("end time clicked");

    let hoursInput = document.getElementById("hoursInput");
    let timeInput = document.getElementById("timeInput");

    console.log("Hours: ", hoursInput.value);
    console.log("Time: ", timeInput.value);

    let timeParts= (timeInput.value).split(":");

    let currentTime= new Date();
    currentTime.setHours(parseInt(timeParts[0]));
    currentTime.setMinutes(parseInt(timeParts[1]));
    let valAdd = hoursInput.value * 3600000;
    let finalTime = new Date(currentTime.getTime()+valAdd);

    console.log("Final Time: ", finalTime);
    let dateParts = finalTime.toString().split(' ');

    let standardTime=extractStandardTime(finalTime);

    let finalString= dateParts[0]+" "+dateParts[1]+" "+dateParts[2]+ "<br>"+standardTime;

    if(hoursInput.value!="" && timeInput.value!=""){
        let displayEndTime=document.getElementById("endTimeOutput");
        displayEndTime.innerHTML="";
        const result=document.createElement("p");
        result.innerHTML=finalString;
        displayEndTime.appendChild(result);
    }
});

//extracts normal readable time from military time
function extractStandardTime(dateTimeString) {
    var date = new Date(dateTimeString);
    var hours = date.getHours();
    var minutes = ("0" + date.getMinutes()).slice(-2);
    var seconds = ("0" + date.getSeconds()).slice(-2);
    var period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    var standardTime = hours + ":" + minutes + ":" + seconds + " " + period;
    return standardTime;
}

//dont allow e to be entered
let reticleInput = document.getElementById("reticleInput");
let subsiteInput = document.getElementById("subsiteInput");
let secondsInput = document.getElementById("secondsInput");
reticleInput.addEventListener("keydown", function(event) {
    if (event.key === "e" || event.key === "." || event.key === "-") {
        event.preventDefault();
    }
});
subsiteInput.addEventListener("keydown", function(event) {
    if (event.key === "e" || event.key === "." || event.key === "-") {
        event.preventDefault();
    }
});
secondsInput.addEventListener("keydown", function(event) {
    if (event.key === "e" || event.key === "-") {
        event.preventDefault();
    }
});

//event listener for button, takes reticales subsites and time, multiplies together and outputs in div
totaltimeButton.addEventListener("click", function(){
    console.log("total time clicked");

    let reticleInput = document.getElementById("reticleInput");
    let subsiteInput = document.getElementById("subsiteInput");
    let secondsInput = document.getElementById("secondsInput");

    console.log("Reticles: ", reticleInput.value);
    console.log("Subsites: ", subsiteInput.value);
    console.log("Seconds: ", secondsInput.value);

    let totalSeconds = reticleInput.value*subsiteInput.value*secondsInput.value;
    let finalTime=(totalSeconds/60)/60;

    console.log("Final Time: ", finalTime);

    let finalString="Total test time is " + finalTime.toFixed(3) + " hours";

    if(reticleInput.value!="" && subsiteInput.value!="" && secondsInput.value!=""){
        let totalTimeOutput=document.getElementById("totalTimeOutput");
        totalTimeOutput.innerHTML="";
        const result=document.createElement("p");
        result.innerHTML=finalString;
        totalTimeOutput.appendChild(result);
    }
});

