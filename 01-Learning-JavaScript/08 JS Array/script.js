const message = document.getElementById("message");
const button = document.getElementById("changeBtn");

button.addEventListener("click", function () {
	message.textContent = "JavaScript changed this text after the button click.";
	message.style.color = "green";
});


alert("Hello, welcome to the JavaScript practice!");