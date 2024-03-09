function time(){
     var date = new Date();
     var hours = date.getHours();
     var minutes = date.getMinutes();
     var second = date.getSeconds();
     var previous = "";
        if(hours>=12){
            previous ="PM";
        } else {
            previous ="AM";
        }

        if(hours==0){
            hours=12;
        } else {
            if(hours>12){
                hours= hours-12;
            }
        }

        hours = update(hours);
        minutes= update(minutes);
        second = update(second);

        document.getElementById("clock").innerText = hours + " : " + minutes + " : " + second +" "+previous;

        setTimeout(time , 1000);
}
function update(t){
    if(t<10){
        return "0" + t;

    } else {
        return t;
    }
}
time(); 