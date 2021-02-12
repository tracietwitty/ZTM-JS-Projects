const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggle = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')


// Sorts light and dark images depending on what mode is selected:
function imageMode(color) {
    image1.src = `./img/undraw_proud_coder_${color}.svg`
    image2.src = `./img/undraw_feeling_proud_${color}.svg`
    image3.src = `./img/undraw_conceptual_idea_${color}.svg`
}

//  Defines detailed dark mode styling:
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)'
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    toggle.children[0].textContent = 'Dark Mode'
    toggle.children[1].classList.replace('fa-sun', 'fa-moon')
    imageMode('dark')
}

//  Defines detailed light mode styling:
function lightMode() {
    nav.style.backgroundColor =  'rgb(255 255 255 / 50%)'
    textBox.style.backgroundColor = 'rgb(0 0 0 /50%)'
    toggle.children[0].textContent = 'Light Mode'
    toggle.children[1].classList.replace('fa-moon', 'fa-sun')
    imageMode('light')
}

// Switches theme dynamically:
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark')
        darkMode()
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
        lightMode()
    }
}

// Event Listeners:
toggleSwitch.addEventListener('change', switchTheme)