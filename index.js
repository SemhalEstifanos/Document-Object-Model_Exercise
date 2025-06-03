// 1
document.body.style.backgroundColor = "white";
document.body.style.width = "80%";
document.body.style.margin = "auto";



// 2
const title = document.getElementById("title");
title.style.color = "green";
title.style.fontSize = "300%";
title.style.textAlign = "center";


// 3
const h3s = document.querySelectorAll("h3");
h3s.forEach(function (h3) {
    h3.style.textTransform = "uppercase";
    h3.style.fontSize = "150%";
    h3.style.color = "green";
});

// 4
const fruitList = document.getElementById("fruits");
const newFruit = document.createElement("li");
newFruit.textContent = "Pineapples";
fruitList.appendChild(newFruit);


// 5
const vegList = document.getElementById("vegList");
const newVeg = document.createElement("li");
newVeg.textContent = "Broccoli";
vegList.appendChild(newVeg);





fruits.style.display = "flex";
fruits.style.gap = "5%";
fruits.style.fontSize = "130%";
fruits.style.marginBottom = "8%";


vegList.style.display = "flex";
vegList.style.gap = "8%";
vegList.style.fontSize = "130%";
vegList.style.marginBottom = "5%";


const subtitle = document.getElementById("subtitle");

subtitle.style.fontSize = "170%";
subtitle.style.textAlign = "center";
subtitle.style.color = "#ffffff";
subtitle.style.padding = "0.5%";
subtitle.style.marginBottom = "5%";
subtitle.style.backgroundColor = "green"


function addImageToItem(list, imgLocation) {
    const img = document.createElement("img");
    img.src = imgLocation;
    img.alt = list.textContent;
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.objectFit = "contain";
    list.insertBefore(img, list.firstChild);
}


const fruitItems = fruitList.querySelectorAll("li");
const vegItems = vegList.querySelectorAll("li");

addImageToItem(fruitItems[0], "images/mango-removebg-preview.png");
addImageToItem(fruitItems[1], "images/banana-removebg-preview.png");
addImageToItem(fruitItems[2], "images/melon-removebg-preview.png");
addImageToItem(fruitItems[3], "images/strawberry-removebg-preview.png");

addImageToItem(vegItems[0], "images/onion-removebg-preview.png");
addImageToItem(vegItems[1], "images/tomato-removebg-preview.png");
addImageToItem(vegItems[2], "images/kales-removebg-preview.png");
addImageToItem(vegItems[3], "iimages/cabbage-removebg-preview.png");


const allLists = document.querySelectorAll('ul, ol');
for (let list of allLists) {
    list.style.listStyleType = 'none';
}