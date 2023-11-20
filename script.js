let para = document.getElementById("counter");

count = 0;

function increment() {
  
  para.innerText = count;
  alert(count);
	count++;
}