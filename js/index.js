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
