function showTime() {
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString();
    console.log(time);
    setTimeout(showTime, 1000);
}
showTime();