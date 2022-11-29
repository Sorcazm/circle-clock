const minutesHand = document.getElementById('minute')
const hoursHand = document.getElementById('hour')
const secondsHand = document.getElementById('second')


function getTime() {
    const now = new Date()
    const minutes = now.getMinutes()
    const hours = now.getHours()
    const seconds = now.getSeconds()
    const timeInterval = 6

    console.log(minutes, hours, seconds)
    secondsHand.style.transform = 'rotate(' + (seconds * timeInterval) + 'deg)'
    minutesHand.style.transform = 'rotate(' + (minutes * timeInterval) + 'deg)'
    hoursHand.style.transform = 'rotate(' + (hours * 30 + minutes / 2) + 'deg)'
}

setInterval(getTime, 1000)