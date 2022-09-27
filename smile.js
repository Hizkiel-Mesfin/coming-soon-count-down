

  const dayCounter = document.querySelector(".day")
  const hourCounter = document.querySelector(".hour")
  const minuteCounter = document.querySelector(".minute")
  const secondCounter = document.querySelector(".second")


const container = document.querySelector(".count-down-container")
const expire = document.querySelector(".ex")

export const  updater = setInterval(function() {
    // Get date i want to count down from in milli seconds
  const countDownDate = new Date("Novemeber 27, 2022 15:42:50").getTime();

  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dayCounter.innerText = `${days} days`
  hourCounter.innerText = `${hours} hours`
  minuteCounter.innerText = `${minutes} minutes`
  secondCounter.innerText = `${seconds} seconds`


  // When the count down is finished
  if (distance < 0) {
    clearInterval(updater);
    container.style.display  = "none"
    expire.style.display = "block"
  }
}, 1000);


