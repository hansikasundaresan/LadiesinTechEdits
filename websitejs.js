function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.padding = "20px 0px 20px 0px";
  } else {
    document.getElementById("header").style.padding = "40px 0px 40px 0px";
  }
}
if (matchMedia) {
const mq = window.matchMedia("(max-width: 767px)");
mq.addListener(WidthChange);
WidthChange(mq);
}

function WidthChange(mq) {
if (mq.matches) {
var shiftWindow = function() { scrollBy(0, -200) };
window.addEventListener("hashchange", shiftWindow);
function load() { if (window.location.hash) shiftWindow(); }} else {
var shiftWindow = function() { scrollBy(0, -120) };
window.addEventListener("hashchange", shiftWindow);
function load() { if (window.location.hash) shiftWindow(); }}
}
