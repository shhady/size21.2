const myText = document.querySelector("h1");
const more = document.querySelector(".more");
const less = document.querySelector(".less");

more.addEventListener("click", function () {
  let current = parseFloat(
    getComputedStyle(myText).getPropertyValue("font-size")
  );
  console.log(current);
  if (current > 6 && current <= 100) {
    myText.style.fontSize = current + 10 + "px";
  }
});
less.addEventListener("click", function () {
  let current = parseFloat(
    getComputedStyle(myText).getPropertyValue("font-size")
  );
  console.log(current);
  myText.style.fontSize = current - 10 + "px";
});
