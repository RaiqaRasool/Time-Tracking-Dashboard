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
    daily.style.color="white";
    weekly.style.color="hsl(236, 100%, 87%)";
    monthly.style.color="hsl(236, 100%, 87%)";

    work.innerHTML="5hrs";
    work_previous.innerHTML="Yesterday - 7hrs";
    play.innerHTML="1hr";
    play_previous.innerHTML="Yesterday - 2hrs";
    study.innerHTML="0hrs";
    study_previous.innerHTML="Yesterday - 1hr";
    exercise.innerHTML="1hr";
    exercise_previous.innerHTML="Yesterday - 1hr";
    social.innerHTML="1hr";
    social_previous.innerHTML="Yesterday - 3hrs";
    self_care.innerHTML="0hrs";
    self_care_previous.innerHTML="Yesterday - 1hr";
}
daily.addEventListener("onclick",daily_schedule);

function weekly_schedule(){
    daily.style.color="hsl(236, 100%, 87%)";
    weekly.style.color="white";
    monthly.style.color="hsl(236, 100%, 87%)";

    work.innerHTML="32hrs";
    work_previous.innerHTML="Last Week - 36hrs";
    play.innerHTML="10hrs";
    play_previous.innerHTML="Last Week - 8hrs";
    study.innerHTML="0hrs";
    study_previous.innerHTML="Last Week - 1hr";
    exercise.innerHTML="4hrs";
    exercise_previous.innerHTML="Last Week - 5hrs";
    social.innerHTML="5hrs";
    social_previous.innerHTML="Last Week - 10hrs";
    self_care.innerHTML="2hrs";
    self_care_previous.innerHTML="Last Week - 2hrs";
}
weekly.addEventListener("onclick",weekly_schedule);

function monthly_schedule(){
    daily.style.color="hsl(236, 100%, 87%)";
    weekly.style.color="hsl(236, 100%, 87%)";
    monthly.style.color="white";

    work.innerHTML="103hrs";
    work_previous.innerHTML="Last Month - 128hrs";
    play.innerHTML="23hrs";
    play_previous.innerHTML="Last Month - 29hrs";
    study.innerHTML="13hrs";
    study_previous.innerHTML="Last Month - 19hrs";
    exercise.innerHTML="11hrs";
    exercise_previous.innerHTML="Last Month - 18hrs";
    social.innerHTML="21hrs";
    social_previous.innerHTML="Last Month - 23hrs";
    self_care.innerHTML="7hrs";
    self_care_previous.innerHTML="Last Month - 11hrs";
}
monthly.addEventListener("onclick",monthly_schedule);
