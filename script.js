const secHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hrHand = document.querySelector('.hr-hand');

function getTime() {
    const time = new Date();
    const second = time.getSeconds();
    const minute = time.getMinutes();
    const hour = time.getHours();

    const secDegrees = second / 60 * 360;
    const minDegrees = minute / 60 * 360 + second / 60 * 6; //360 degrees / 60 seconds = 6
    const hrDegrees = hour / 12 * 360 + minute / 60 * 30;

    secHand.style.transform = `rotate(${secDegrees}deg)`;
    minHand.style.transform = `rotate(${minDegrees}deg)`;
    hrHand.style.transform = `rotate(${hrDegrees}deg)`;
}

setInterval(getTime, 1000);

getTime();

