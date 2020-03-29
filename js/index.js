// Hello world!!

let bar = document.querySelector('.progress')

window.addEventListener('scroll',event => {
    // Window Height
    let windowH = window.innerHeight
    // Document Height
    let documentH = document.documentElement.scrollHeight
    //How much has been scrolled
    let amntScrolled = window.scrollY
    //How much Can be scrolled
    let ttlAvailable = documentH - windowH
    //What percentage of the scrollable is scrolled
    let percent = amntScrolled/ttlAvailable

    //Take the decimal percentage and convert to
    bar.style.width = `{percent * 100}%`
    bar.textContent = `${Math.round(percent*100)}%`
})

window.addEventListener('mousemove',event=> {
    console.log(event.clientX, event.CLIENT)
})
// Goodbye world.
let $bar = document.querySelector('.progress')
let $progressText = document.querySelector('.progressText')

window.addEventListener('scroll', event => {
let windowH = window.innerHeight
let documentH = document.documentElement.scrollHeight
let amtScrolled = window.scrollY
let ttlAvailable = documentH - windowH
let percent = amtScrolled / ttlAvailable
$bar.style.width = `${percent * 100}%`
$progressText.textContent = `${Math.round(percent*100)}%`
let h1Top = $h1.offsetTop
let h1Height = $h1.clientHeight
console.log(h1Top, h1Height, amtScrolled)
if (amtScrolled > h1Top + h1Height) {
    console.log('H1 is off the top')
    $titleBar.classList.add(`show`)
    $titleBar.innerHTML = `${title}`;
} else {
    $titleBar.classList.remove(`show`)
    $titleBar.innerHTML = ``;
}
})

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