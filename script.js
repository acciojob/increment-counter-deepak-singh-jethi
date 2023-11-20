let para = document.getElementById("counter");
let btn = document.getElementById("incrementBtn");
count = 0;
btn.addEventListener("click", (e) => {
  count++;
  para.innerText = count;
});

btn.addEventListner("on")