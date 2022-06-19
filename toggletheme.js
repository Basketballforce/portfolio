// Mode toggling built with help from https://css-tricks.com/author/mohamedadhuham/ 
// on https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/

//////////// Var Initialization //////////////

// Select the icon
const sunMoon = document.querySelector("#sunMoon")

// set alternative icon styles
const sun = '<i data-feather="sun"></i>'

const moon = '<i data-feather="moon"></i>'
// select the current css theme
const cssSheet = document.querySelector("#theme-toggle")

// Check for dark mode preference on the browser/os preference
// returns boolean in ".matches" attribute
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)")

// Get the user's theme preference from local storage, if there
const currentTheme = localStorage.getItem("theme")

/////// Check for theme on intial page load (local storage or os/browser preference) /////////

// run on page load
  // 1. if the user has a set mode in their local storage use it
  if (currentTheme == "dark") {
    sunMoon.innerHTML = sun
    cssSheet.href = "empty.css"

  // 2. Otherwise check if light mode is set in localstorage
  } else if (currentTheme=="light"){
    sunMoon.innerHTML = moon
    cssSheet.href = "light-style.css"
  }

  // 3. Otherwise check if the user has a default OS/Browser mode preference
  // could remove os/browser checks as desired and just default to light in above step 2
  else if (prefersDarkScheme.matches==true){
    sunMoon.innerHTML = sun
    cssSheet.href = "empty.css"
  }
  // 4. default to light mode
  else {
    sunMoon.innerHTML = moon
    cssSheet.href = "light-style.css"
  }


///////// Handle icon click events/requests to change the mode to light or dark //////////

// Event that activates when sun or moon is clicked. 
// Minor optimization of # of resize calls can be done with throttle wrapper around 
// After testing, didn't seem worth it
sunMoon.addEventListener("click", function() {
  // If light mode is already set as the href, then change it to dark mode
  if (!cssSheet.href.includes("light")) {
    sunMoon.innerHTML = moon
    cssSheet.href = "light-style.css"
    var theme = 'light'
    
  // otherwise the theme is currently dark and needs to change it to light mode
  } else {
    sunMoon.innerHTML = sun
    cssSheet.href = "empty.css"
    var theme = 'dark'
  }
  // Lastly, save the  current preference to localStorage to keep using it on new page requests/other pages
  localStorage.setItem("theme", theme)

  feather.replace()
  
})



////// Move light/dark icons between mobile and desktop view ///////

// toggle where the dark/light mode icon appears
const lastNavbarLi = document.querySelector("#lastNavbarLi")
const hamburger = document.querySelector("#hamburger")