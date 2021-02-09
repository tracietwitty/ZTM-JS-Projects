const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggle = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')

//  Defines detailed dark mode styling:
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)'
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    toggle.children[0].textContent = 'Dark Mode'
    toggle.children[1].classList.remove('fa-sun')
    toggle.children[1].classList.add('fa-moon')
    image1.src = './img/undraw_proud_coder_dark.svg'
    image2.src = './img/undraw_feeling_proud_dark.svg'
    image3.src = './img/undraw_conceptual_idea_dark.svg'
}

//  Defines detailed light mode styling:
function lightMode() {
    nav.style.backgroundColor =  'rgb(255 255 255 / 50%)'
    textBox.style.backgroundColor = 'rgb(0 0 0 /50%)'
    toggle.children[0].textContent = 'Light Mode'
    toggle.children[1].classList.remove('fa-moon')
    toggle.children[1].classList.add('fa-sun')
    image1.src = './img/undraw_proud_coder_light.svg'
    image2.src = './img/undraw_feeling_proud_light.svg'
    image3.src = './img/undraw_conceptual_idea_light.svg'
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