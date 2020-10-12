const allCategori = document.querySelectorAll(".item");
console.log(allCategori);
console.log(`В списке ${allCategori.length} категории.`);

allCategori.forEach((allCategori) =>
  console.log(`Категория: ${allCategori.firstElementChild.textContent}
Количество элементов: ${allCategori.lastElementChild.children.length}`)
);
