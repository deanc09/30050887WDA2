const myFormSubmits = (event) => {
  event.preventDefault();
  console.log("I worked");
  downloadFormData();
  thanks();
};

const downloadFormData = () => {
  const form = document.getElementById("contact-form");
  const formData = new FormData(form);
  let dataString = "";

  for (let [key, value] of formData.entries()) {
    dataString += `${key}: ${value}\n`;
  }

  const blob = new Blob([dataString], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "contact-data.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
};

function thanks() {
  window.location.href = "thankyou.html";
}

// Attach the submit event listener once
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", myFormSubmits);
});
