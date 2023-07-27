const list = document.querySelector('#categories');
console.log(`Number of categories: ${list.childElementCount}`);
const li = document.querySelectorAll('.item');
const result = li.forEach(category => {
    console.log(`Category: ${category.querySelector('h2').textContent}`)
    console.log(`Elements: ${category.querySelector('ul').childElementCount}`);;
});
console.log(result);