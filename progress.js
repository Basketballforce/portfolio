  // throttle scroll limiter
  // wait is in milliseconds
  function throttle(fn, wait) {
    let lastCall = 0;
    return function () {
      if (Date.now() - lastCall > wait) {
        lastCall = Date.now()
        fn()
      }
    }
  }

  // When the user scrolls the page, change progress bar width
  document.addEventListener('scroll', throttle(progressWidth, 15))
  // change scrollbar width when resizing
  window.addEventListener('resize', function (event) {
    progressWidth()
  })

  document.addEventListener("DOMContentLoaded", () => {
    progressWidth()
  })

  function progressWidth() {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrolled = Math.round(scrollPercent * 100);
    document.getElementById("progressBar").style.width = scrolled + 3 + "%";
  }