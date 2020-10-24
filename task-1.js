const allCategory = document.querySelectorAll(".item");
console.log(allCategory);
console.log(`В списке ${allCategory.length} категории.`);

allCategory.forEach((allCategory) =>
  console.log(`Категория: ${allCategory.firstElementChild.textContent}
Количество элементов: ${allCategory.lastElementChild.children.length}`)
);
