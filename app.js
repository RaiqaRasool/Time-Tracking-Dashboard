const exercise=document.getElementsByClassName('exercise-card-title');
const work=document.getElementsByClassName('work-card-title');
const study=document.getElementsByClassName('study-card-title');
const social=document.getElementsByClassName('social-card-title');
const self_care=document.getElementsByClassName('self-care-card-title');
const play=document.getElementsByClassName('play-card-title');

const exercise_previous=document.getElementsByClassName("exercise-card-last-hours");
const work_previous=document.getElementsByClassName("work-card-last-hours");
const play_previous=document.getElementsByClassName("play-card-last-hours");
const study_previous=document.getElementsByClassName("study-card-last-hours");
const social_previous=document.getElementsByClassName("social-card-last-hours");
const self_care_previous=document.getElementsByClassName("self-care-card-last-hours");

const daily=document.getElementsByClassName("daily-menu-item");
const weekly=document.getElementsByClassName("weekly-menu-item");
const monthly=document.getElementsByClassName("monthly-menu-item");
function daily_schedule(){
    daily[0].style.color="white";[0]
    weekly[0].style.color="hsl(236, 100%, 87%)";
    monthly[0].style.color="hsl(236, 100%, 87%)";

    work[0].innerHTML="5hrs";
    work_previous[0].innerHTML="Yesterday - 7hrs";
    play[0].innerHTML="1hr";
    play_previous[0].innerHTML="Yesterday - 2hrs";
    study[0].innerHTML="0hrs";
    study_previous[0].innerHTML="Yesterday - 1hr";
    exercise[0].innerHTML="1hr";[0]
    exercise_previous[0].innerHTML="Yesterday - 1hr";
    social[0].innerHTML="1hr";
    social_previous[0].innerHTML="Yesterday - 3hrs";
    self_care[0].innerHTML="0hrs";
    self_care_previous[0].innerHTML="Yesterday - 1hr";
}

daily[0].addEventListener("click",daily_schedule);

function weekly_schedule(){
    daily[0].style.color="hsl(236, 100%, 87%)";
    weekly[0].style.color="white";
    monthly[0].style.color="hsl(236, 100%, 87%)";

    work[0].innerHTML="32hrs";
    work_previous[0].innerHTML="Last Week - 36hrs";
    play.innerHTML="10hrs";
    play_previous[0].innerHTML="Last Week - 8hrs";
    study[0].innerHTML="0hrs";
    study_previous[0].innerHTML="Last Week - 1hr";
    exercise[0].innerHTML="4hrs";
    exercise_previous[0].innerHTML="Last Week - 5hrs";
    social[0].innerHTML="5hrs";
    social_previous[0].innerHTML="Last Week - 10hrs";
    self_care[0].innerHTML="2hrs";
    self_care_previous[0].innerHTML="Last Week - 2hrs";
}

weekly[0].addEventListener("click",weekly_schedule);

function monthly_schedule(){
    daily[0].style.color="hsl(236, 100%, 87%)";
    weekly[0].style.color="hsl(236, 100%, 87%)";
    monthly[0].style.color="white";

    work[0].innerHTML="103hrs";
    work_previous[0].innerHTML="Last Month - 128hrs";
    play[0].innerHTML="23hrs";
    play_previous[0].innerHTML="Last Month - 29hrs";
    study[0].innerHTML="13hrs";[0]
    study_previous[0].innerHTML="Last Month - 19hrs";
    exercise[0].innerHTML="11hrs";
    exercise_previous[0].innerHTML="Last Month - 18hrs";
    social[0].innerHTML="21hrs";
    social_previous[0].innerHTML="Last Month - 23hrs";
    self_care[0].innerHTML="7hrs";
    self_care_previous[0].innerHTML="Last Month - 11hrs";
}
monthly[0].addEventListener("click",monthly_schedule);
