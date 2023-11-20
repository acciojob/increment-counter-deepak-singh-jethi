let para = document.getElementById("counter");

count = 0;

function increment() {
  count++;
  para.innerText = count;
  alert(count);
}