const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsArr= ingredients.map(ingredient => {
    const food = document.createElement('li');
    food.classList.add('item');
    food.textContent = ingredient;
    return food;
  });

const ingredientsList = document.querySelector('#ingredients');
ingredientsList.append(...ingredientsArr);
