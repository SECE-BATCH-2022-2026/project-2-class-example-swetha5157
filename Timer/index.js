let startBtn=document.getElementById("start");
let stopBtn=document.getElementById("stop");
let seconds=document.getElementById("counter");
let minutes=document.getElementById("minutes");
let hours=document.getElementById("hours");
let resetBtn=document.getElementById("reset");
let show_m=document.getElementById("dism");
let show_s=document.getElementById("diss");
let show_h=document.getElementById("dish");
let sec_c=0;
let control;
let min_c=0;
let hour_c=0;
let inc=1;
function formatNumber(number){
    if(number<10){
        return '0'+number;
    }else{
        return number;
    }
}
startBtn.onclick=()=>{
    clearInterval(control);
    control=setInterval(()=>{
       sec_c+=1;
        seconds.innerHTML=formatNumber(sec_c);
        if(sec_c===60){
            min_c+=1;
            min_c = min_c % 60;
            minutes.innerHTML=formatNumber(min_c);
            sec_c=0;
            seconds.innerHTML=formatNumber(sec_c);
        }
        if(min_c===60){
            hour_c+=1;
            hours.innerHTML=formatNumber(hour_c);
            min_c=0;
            sec_c=0;
            seconds.innerHTML=formatNumber(sec_c);
            minutes.innerHTML=formatNumber(min_c);
        }

    },1000)
}
stopBtn.onclick=()=>{
    clearInterval(control);
    const lapTime=`Hours ${hour_c}:Minutes ${min_c}:Seconds ${sec_c}`
let lapDiv=document.createElement("div")
lapDiv.innerHTML=`<div>${lapTime}</div>`
lap.appendChild(lapDiv);
   
   

}

resetBtn.onclick=()=>{
   clearInterval(control)
   sec_c=0
   seconds.innerHTML=sec_c
   min_c=0
   minutes.innerHTML=min_c
   hour_c=0
   hours.innerHTML=hour_c;
   seconds.innerHTML = '00';
   minutes.innerHTML = '00';
   hours.innerHTML = '00';
   lap.innerHTML = '';

}

