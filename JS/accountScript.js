const accountFormFunction = (event) => {
	event.preventDefault();

	const form = event.target;

	const passwordInput = form.querySelector("#password");
	const confirmInput = form.querySelector("#confirmedPassword");
	const error = document.getElementById("passwordError");

	if (passwordInput && confirmInput) {
		if (passwordInput.value !== confirmInput.value) {
			error.classList.remove("d-none");
			confirmInput.classList.add("is-invalid");
			return;
		}

		error.classList.add("d-none");
		confirmInput.classList.remove("is-invalid");
	}
	downloadFormData(form);
};

const downloadFormData = (form) => {
	const formData = new FormData(form);
	let dataString = "";

	for (let [key, value] of formData.entries()) {
		dataString += `${key}: ${value}\n`;
	}

	const blob = new Blob([dataString], { type: "text/plain" });
	const url = URL.createObjectURL(blob);

	const a = document.createElement("a");
	a.href = url;
	a.download = "account-data.txt";
	document.body.appendChild(a);
	a.click();
	document.body.removeChild(a);

	URL.revokeObjectURL(url);
};

document.addEventListener("DOMContentLoaded", () => {
	const forms = document.querySelectorAll(".account-form");
	forms.forEach((form) => form.addEventListener("submit", accountFormFunction));
});
