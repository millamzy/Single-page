
function updateTime() {
    const utcTimeElement = document.getElementById('utcTime');
    const currentDayElement = document.getElementById('currentDay');
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getUTCDay()];

    utcTimeElement.textContent = utcTime;
    currentDayElement.textContent = currentDay;
}

updateTime();
setInterval(updateTime, 1000);
