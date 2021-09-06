const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
let currentIcon = 'fa-sun';

// Dark or Light Mode Style
const switchModeTo = (mode, navigationBackground, textBoxBackground, newIcon) => {
  nav.style.backgroundColor = navigationBackground;
  textBox.style.backgroundColor = textBoxBackground;
  toggleIcon.children[0].textContent = `${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode`;
  toggleIcon.children[1].classList.replace(currentIcon, newIcon);
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
  currentIcon = newIcon;
};

// Switch Theme Dynamically
const switchTheme = event => {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    switchModeTo('dark', 'rgb(0 0 0 / 50%)', 'rgb(255 255 255 / 50%)', 'fa-moon');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    switchModeTo('light', 'rgb(255 255 255 / 50%)', 'rgb(0 0 0 / 50%)', 'fa-sun');
  }
};

// Event Listener
toggleSwitch.addEventListener("change", switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  toggleSwitch.checked = true;
  switchTheme({target: toggleSwitch});
}