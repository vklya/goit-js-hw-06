"use strict";

const categories = document.querySelectorAll('.item');
console.log(`Количество категорий: ${categories.length}.`);

const categoriesArr = [...categories]
    .map(category => `В категории ${category.children[0].textContent} количество элементов ${category.children[1].children.length}.`)
    .join('\n');

console.log(categoriesArr);