const categories = document.querySelectorAll('.item');

console.log('Number of categories:', categories.length);

categories.forEach(category => {
    const categoryName = category.querySelector('h2');
    const categoryCountList = category.querySelectorAll('li')
    console.group(categoryName.textContent);
    console.log("Category:", categoryName.textContent);
    console.log("Elements:", categoryCountList.length);
    console.groupEnd();
})
