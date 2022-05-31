// grab progress bar
const pageProgressBar = document.getElementById("progress-bar")

// grab and return scroll container. height that scrollbar should be bound to
const scrollContainer = () => {
  return document.getElementById("progress-container")
}

// set the scrollbar width when loaded in
document.addEventListener("DOMContentLoaded", () =>{
    progressWidth()

    // change scrollbar width when scrolling. using throttle to limit function calls
    document.addEventListener('scroll', throttle( progressWidth, 15 ) )

    // change scrollbar width when resizing
    window.addEventListener('resize', function(event) {
        progressWidth()
    })

})

// function to change scrollbar width accordingly
const progressWidth= () => {
    //console.log("Scroll Height: ", scrollContainer().scrollHeight)
    //console.log("Client Height: ", scrollContainer().clientHeight)
    //console.log("function throttle check")

    // calcualte scroll percentage relative to the container
    const scrolledPercentage =
      (scrollContainer().scrollTop /
        (scrollContainer().scrollHeight - scrollContainer().clientHeight)) *
      100
  
    // plus 1 enables a range of 1% to 101%. Stylistic choice
    pageProgressBar.style.width = `${scrolledPercentage+ 1}%`
}


// throttle scroll limiter
// wait is in milliseconds
function throttle( fn, wait ){
    let lastCall = 0;
      return function(){
      if( Date.now() - lastCall > wait  ){
        lastCall = Date.now()
        fn()
      }
    }
  }
