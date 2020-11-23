let time = new Date();
if(time.getHours()>19 && time.getHours()<6){
    document.querySelector("#root").classList.remove("day");
    document.querySelector("#root").classList.add("night");
}
else{
    document.querySelector("#root").classList.remove("night");
    document.querySelector("#root").classList.add("day");
}
let seconds = document.querySelector("#second");
let hours = document.querySelector("#hour");
let minutes = document.querySelector("#minute");

seconds.innerHTML = time.getSeconds();
hours.innerHTML = time.getHours();
minutes.innerHTML = time.getMinutes();

let ival = setInterval(()=>{
    let s = parseInt(seconds.innerHTML);
    let h = parseInt(hours.innerHTML);
    let m = parseInt(minutes.innerHTML);
    if(s == 59){
        s = 0;
        if(m == 59){
            m = 0;
            if(hours == 23){
                h = 0;
            }
            else{
                h++;
            }
            if(h < 10)
                hours.innerHTML = "0"+h;
            else
                hours.innerHTML = (parseInt(hours.innerHTML)+1);
        }
        else
            m++;
        if(m < 10)
            minutes.innerHTML = "0"+m;
        else
            minutes.innerHTML = (parseInt(minutes.innerHTML)+1);
    }
    else 
        s++;
    if(s < 10)
        seconds.innerHTML = "0"+s;
    else
        seconds.innerHTML = (parseInt(seconds.innerHTML)+1);

},1000)

