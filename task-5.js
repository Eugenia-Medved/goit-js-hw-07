const form = document.querySelector("#name-input");
const nameText = document.querySelector("#name-output");

form.addEventListener(
  "input",
  () =>
    (nameText.textContent = form.value.length > 0 ? form.value : "незнакомец")
);
