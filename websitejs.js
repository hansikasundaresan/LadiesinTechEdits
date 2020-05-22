

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.padding = "40px 0px 20px 10px";
  } else {
    document.getElementById("header").style.padding = "50px 0px 50px 10px";
  }
}
