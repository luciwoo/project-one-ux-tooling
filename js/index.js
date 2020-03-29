// let $bar = document.querySelector('.progress')
// let $progressText = document.querySelector('.progressText')

// window.addEventListener('scroll', event => {
// let windowH = window.innerHeight
// let documentH = document.documentElement.scrollHeight
// let amtScrolled = window.scrollY
// let ttlAvailable = documentH - windowH
// let percent = amtScrolled / ttlAvailable
// $bar.style.width = `${percent * 100}%`
// $progressText.textContent = `${Math.round(percent*100)}%`
// let h1Top = $h1.offsetTop
// let h1Height = $h1.clientHeight
// console.log(h1Top, h1Height, amtScrolled)
// if (amtScrolled > h1Top + h1Height) {
//     console.log('H1 is off the top')
//     $titleBar.classList.add(`show`)
//     $titleBar.innerHTML = `${title}`;
// } else {
//     $titleBar.classList.remove(`show`)
//     $titleBar.innerHTML = ``;
// }
// })

// sticky menu
window.onscroll = function() {myFunction()};

let navBar = document.getElementById("navBar");
let sticky = navBar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
};

// Time count
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};