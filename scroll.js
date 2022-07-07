const scrollElements = document.querySelectorAll(".js-scroll")

var throttletimer;

const total = scrollElements.length

var numberRevealed =0

const scrollThrottle = (callback,time) => {
  if (throttletimer) return;

  throttletimer = true;
  setTimeout(() =>{
    callback()
    throttletimer=false;
  }, time);
}

const elementInView = (el, dividend=1) => {
  const elementTop = el.getBoundingClientRect().top

  return(
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) /dividend
  )
}

const displayScrollElement = (element) => {
  if(!(element.classList.contains("scrolled"))){
    numberRevealed++

    if(numberRevealed==total){
      window.removeEventListener("scroll", scrollListener)
    }
  }

  element.classList.add("scrolled")
}

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el,1.25)){
      displayScrollElement(el)
      window.removeEventListener("load", scrollListener)
    }
  })
}

scrollListener = function(){
  scrollThrottle(() =>{
    handleScrollAnimation()
  },250)
}

window.addEventListener("load", scrollListener)
window.addEventListener("scroll", scrollListener)