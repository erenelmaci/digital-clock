const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const second = document.querySelector(".second")

function getTime() {
    setInterval(() => {
        let hour = new Date().getHours()
        let min = new Date().getMinutes()
        let sec = new Date().getSeconds()
        hour = hour < 10 ? "0" + hour : hour
        min = min < 10 ? "0" + min : min
        sec = sec < 10 ? "0" + sec : sec
        hours.innerText = hour
        minutes.innerText = min
        second.innerText = sec
    }, 1000)
}

getTime()
