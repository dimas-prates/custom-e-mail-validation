//Harvesting elements
const form = document.querySelector("form"),
  eInput = form.querySelector(".input"),
  text = form.querySelector(".text");

form.addEventListener("submit", (res) => {
  res.preventDefault();
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  form.classList.add("error");
  form.classList.remove("valid");
  if (eInput.value == "") {
    text.innerText = "Email can't be blank";
  } else if (!eInput.value.match(pattern)) {
    text.innerText = "Please enter a valid email";
  } else {
    form.classList.replace("error", "valid");
    text.innerText = "This is a valid email";
  }
});
