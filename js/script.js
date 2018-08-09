var leapYear = function(year){

  var year = document.getElementById('years').value;
  if(year%4===0){
    if(year%100===0){
      if(year%400===0){
        alert(year+" is a leap year. TRUE");
      }else{
        alert(year+" is not a leap year. FALSE");
      }

    }else{
      alert(year+" is a leap year. TRUE");
    }
  }
  else{
   alert(year+" is not a leap year. FALSE");
  }


}
// var years = parseInt(prompt("Enter Year"));
// var result = leapYear(years);
