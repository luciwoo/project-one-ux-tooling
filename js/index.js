// window.addEventListener('load', function theStateOfTheInterface(){
  let theStateOfTheInterface =() => {

    let winH = document.documentElement.clientHeight
    let winW = document.documentElement.clientWidth
    let docH = document.documentElement.scrollHeight
    let docW = document.documentElement.scrollWidth
    let winY = window.scrollY
    let winX = window.scrollX
    let maxY = docH - winH
    let maxX = docW - winW
    let pctY = Math.round(winY / Math.max(maxY, 1) * 100)
    let pctX = Math.round(winX / Math.max(maxX, 1) * 100)
    
    let infoForElement = ''
    
    
    let checkOneSection = ($sec) => {
        let fromD = $sec.offsetTop
        let fromW = $sec.getBoundingClientRect().top
        if (fromW < winH / 2) {
            infoForElement += `<li class="past">${$sec.querySelector('h2').textContent}`
        }  else {
            infoForElement += `<li>${$sec.querySelector('h2').textContent}`
        }
    }
    
    // Iterate though each matching element call the checkonesection function for each one
    document.querySelectorAll('.full-viewport').forEach(checkOneSection)
    
    
    document.querySelector('.panel').innerHTML = `
    <h2>Customization Process</h2>
        <li></li>
        <ol> ${infoForElement} </ol>
        <li></li>
    `
    }
    
    window.addEventListener('load', theStateOfTheInterface)
    window.addEventListener('scroll', theStateOfTheInterface)
    window.addEventListener('resize', theStateOfTheInterface)
    
    
    

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

