window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.padding = "20px 0px 20px 0px";
  } else {
    document.getElementById("header").style.padding = "40px 0px 40px 0px";
  }
}

var shiftWindow = function() { scrollBy(0, -100) };
window.addEventListener("hashchange", shiftWindow);
function load() { if (window.location.hash) shiftWindow(); }
