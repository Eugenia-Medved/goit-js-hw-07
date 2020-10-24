const decrementBtn = document.querySelector(".decrement");
const incrementBtn = document.querySelector(".increment");
const counterValue = document.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
});

incrementBtn.addEventListener("click", () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
});
