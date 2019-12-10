let tmpTime = getReginaTime();

function setCloseTime(date) {
    const openTime = 690             // 11:30 in minutes; restaurant open
    const beginLunchBreakTime = 900  // 15:00 in minutes; lunchbreak begin
    const endLunchBreakTime = 960    // 16:00 in minutes; lunchbreak end
    const closeTime = 1230           // 20:30 in minutes; restaurant closing 

    let currentTime = (date.getHours() * 60) + (date.getMinutes());
    
    //console.log(currentTime);
    if (currentTime < openTime || currentTime > beginLunchBreakTime || currentTime < endLunchBreakTime || currentTime > closeTime ) {
        document.getElementById("showOpen").classList.add("setRed");
        document.getElementById("showOpen").innerHTML = "Closed";
    }

}

function setCloseDate(date) {

    if(date.getDay() == 0) { // if the week of day is Sunday, set close
        document.getElementById("showOpen").classList.add("setRed");
        document.getElementById("showOpen").innerHTML = "Closed";
    }
}


function showTime(){
    let reginaTime = new Date( getReginaTime() );
    // no matter to where the timezone has set, the timer shows Regina local time only.    
    let h = reginaTime.getHours();    // 0 - 23
    let m = reginaTime.getMinutes();  // 0 - 59
    let s = reginaTime.getSeconds();  // 0 - 59   
    
    let session = "AM";
    
    if(h == 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    let time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClockDisplay").innerText = time;
    document.getElementById("myClockDisplay").textContent = time;

    // add restaurant open or closed
    setCloseTime(reginaTime);
    setCloseDate(reginaTime);
  
    tmpTime += 1000;
    setTimeout(showTime, 1000);
    
}

showTime();