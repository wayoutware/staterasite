var countDownDate = new Date("Oct 31, 2020 16:00:00").getTime();

function countdown(){
    // get today's date and time
    var now = new Date().getTime();
  
    // find the distance between now and the count down date
    var distance = countDownDate - now;
  
    //  a whole lotta math shit that i don't understand and got from somewhere else
    //  thanks internet
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //leading zeros! it's not the most effecient code but here it is mate
    if (seconds < 10){ var s = seconds; var seconds = "0" + s }
    if (minutes < 10){ var m = minutes; var minutes = "0" + m }
    if (hours < 10){ var h = hours; var hours = "0" + h }
    if (days < 10){ var d = days; var days = "0" + d }


    //output to #countdowndisplay element
    document.getElementById("hlwncounter").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
}

window.setInterval(countdown,1000)
countdown() //run on page load

// //halloween countdown code
// var lengthofday = 1000 * 60 * 60 * 24 
// var present_date = new Date()
// var halloween = new Date(present_date.getFullYear(), 9, 31) 
// var math = Math.round(halloween.getTime() - present_date.getTime()) / (lengthofday)
// var finalresult = math.toFixed(0)

// document.getElementById("hlwncounter").innerHTML = finalresult