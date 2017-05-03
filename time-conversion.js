//Problem statement - Convert a AM PM time to 24 hours Time
//Input - 07:20:30PM
//Output - 19:20:30PM
function convertTimeToMilitaryTime(time){
  //check if it's AM or PM
  let PM = time.match('PM') ? true :false
   time = time.split(':');
  let min = time[1];
  //now check if time is in PM or AM
  if(PM){
    var hour = 12 + parseInt(time[0]%12);
    var sec = time[2].replace("PM",'');
  }else{
    var hour  = time[0];
    var sec = time[2].replace("AM",'');
  }
   time =  hour + ':' + min + ':' + sec;
   return time;
}

convertTimeToMilitaryTime('12:36:38PM');
//will give output 12:36:38
convertTimeToMilitaryTime('10:16:38PM');
//will give output 22:16:38
