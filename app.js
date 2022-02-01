function countDownGat() {
    const title = document.querySelector(".title")
    title.innerHTML = "GAT/PAT"
    const gatDay = new Date("March 12, 2022 08:30:00").getTime()
    const now = new Date().getTime()
    const gap = gatDay - now
    const second = 1000;
    const min = second * 60
    const hour = min * 60
    const day = hour * 24
    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMin = Math.floor((gap % hour) / min)
    const textSecond = Math.floor((gap % min) / second)
    document.querySelector(".days").innerHTML = textDay
    document.querySelector(".hours").innerHTML = textHour
    document.querySelector(".mins").innerHTML = textMin
    document.querySelector(".seconds").innerHTML = textSecond
    setInterval(countDownGat, 1000)
}
countDownGat()
function countDownSaman() {
    const title2 = document.querySelector(".title2")
    title2.innerHTML = "วิชาสามัญ"
    const samanDay = new Date("March 19, 2022 08:30:00").getTime()
    const now = new Date().getTime()
    const gap = samanDay - now
    const second = 1000;
    const min = second * 60
    const hour = min * 60
    const day = hour * 24
    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMin = Math.floor((gap % hour) / min)
    const textSecond = Math.floor((gap % min) / second)
    document.querySelector(".days2").innerHTML = textDay
    document.querySelector(".hours2").innerHTML = textHour
    document.querySelector(".mins2").innerHTML = textMin
    document.querySelector(".seconds2").innerHTML = textSecond
    setInterval(countDownSaman, 1000)
}
countDownSaman()

