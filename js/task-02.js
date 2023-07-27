const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients')

function createLi(arr){
  const ingredient = arr.map((element, idx) => {
    const li = document.createElement('li');
    li.classList.add('item');
    li.textContent = arr[idx];
    return li;
  });
  console.log(ingredient);
  ul.append(...ingredient)
}

createLi(ingredients);