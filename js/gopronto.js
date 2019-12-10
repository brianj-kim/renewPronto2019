function getReginaTime() {
    let date = new Date();
    let utcTime = date.getTime();                                    // current time for millisecond, not the utc 
    let stdTime = utcTime + ( date.getTimezoneOffset() * 60000 ) ;   // adjusting to utc
    let localTime = stdTime - ( 360 * 60000 );  

    return localTime;
}


function getDayDetailed( currTime, timeIdx ) {
    let newDateTime = new Date( currTime );
    switch(timeIdx) {
        case 0: // return year
            return newDateTime.getFullYear();
          
        case 1:
            return newDateTime.getMonth();
        
        case 2: 
            return newDateTime.getDate();

        case 3: 
            return newDateTime.getDay();

        
    }
}

function checkWeekday( currTime ) {
    let getDay = getDayDetailed(currTime, 3);
    let isSunday = false;

    if(getDay == 0){
        isSunday = true;
    }

    return isSunday;
}


