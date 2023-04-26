const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients')

const makeIngredientItem = (options) => {
  return options.map((option) => {

    const gradientItemEl = document.createElement('li');

    gradientItemEl.textContent = option;
    
    return gradientItemEl;
  })
}

const gradientElements = makeIngredientItem(ingredients);

ingredientsList.append(...gradientElements);