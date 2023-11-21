let toastBox = document.getElementById("toastbox");

let successmsg = "successfully submitted";
let errormsg = "Please check the error";
let invalidmsg = "Please enter a valid";

function showToast(msg) {
	let toast = document.createElement("div");
	toast.classList.add("toast");
	toast.innerHTML = msg;
	toastBox.appendChild(toast);

	if (msg.includes("error")) {
		toast.classList.add("error");
	}
	if (msg.includes("valid")) {
		toast.classList.add("valid");
	}

	setTimeout(() => {
		toast.remove();
	}, 3000);
}
