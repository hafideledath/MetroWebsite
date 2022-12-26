let root = document.querySelector(":root")

document.addEventListener("scroll", function(){
  root.style.setProperty("--top", String(window.scrollY / window.innerHeight * -15 + 80) + "%")
  console.log(String(window.scrollY) + "%")
  root.style.setProperty("--margin", String(window.scrollY / window.innerHeight * -50 + 50) + "px")
})

let hoverEl = document.querySelector(".hover")

elRect = hoverEl.getBoundingClientRect();
elX = elRect.left
elY = elRect.top

hoverEl.addEventListener("mousemove", function (e) {
    var x = (e.clientX - elX)/e.clientX * 30;
    var y = (e.clientY - elY)/e.clientY * 90;
    hoverEl.style.transform = "scale(1.1) rotateY(" + y + "deg) rotateX(" + x + "deg)";
});

hoverEl.addEventListener("mouseleave", function () {
  hoverEl.style.transform = "scale(1)";
});