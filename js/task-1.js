const category = document.querySelector("#categories");
const categoryElem = category.children;
console.log(`number of categories: ${categoryElem.length}`);

const itemsElement = document.querySelectorAll(".item");
itemsElement.forEach((item) => {
  console.log("Category: ", item.firstElementChild.textContent);
  console.log("Elements: ", item.lastElementChild.children.length);
});

