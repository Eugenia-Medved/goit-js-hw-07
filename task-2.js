const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const elements = ingredients.map((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredient;

  return ingredientItem;
});
console.log(elements);

const ingredientList = document.querySelector("#ingredients");
ingredientList.append(...elements);
