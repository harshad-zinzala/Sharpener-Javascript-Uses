
// 1. Change the main heading 'Fruit Shop' to 'Fruit World'

// 2. Change the font color of 'Fruit World' from black to orange

// 3. Change background color of div with id = "header" to green color

// 4. Add a bottom border of orange color to div with id = "header"

// 5. Change the font color of 'Fruits In Basket' from black to green

// 6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"

const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Fruit World';
mainHeading.style.color = 'orange';

const header = document.getElementById('header');
header.style.backgroundColor = 'green';
header.style.borderBottom = '3px solid orange';

const basketHeading = document.getElementById('basket-heading');
basketHeading.style.color = 'green';

const thanks = document.getElementById('thanks');
thanks.innerHTML = '<p>Please visit us again</p>';


// for loop

const fruit = document.getElementsByClassName('fruit');
fruit[2].style.backgroundColor = 'yellow';

for (let i = 0; i < fruit.length; i++){
    fruit[i].style.fontWeight = 'bold';
}


// New One
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'center';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';

const h2head = document.querySelector('h2');
h2head.style.marginLeft = '30px';
h2head.style.color = 'brown';

const allFruit = document.querySelectorAll('.fruit');
for (let i = 0; i < allFruit.length; i++){
    allFruit[i].style.padding = '10px';
    allFruit[i].style.margin = '10px';
}

// New One

const oddFruit = document.querySelectorAll('.fruit:nth-child(odd)');
for (let i = 0; i < oddFruit.length; i++){
    oddFruit[i].style.backgroundColor = 'white';
    oddFruit[i].style.borderRadius = '5px';
}

const evenFruit = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < evenFruit.length; i++){
    evenFruit[i].style.backgroundColor = 'brown';
    evenFruit[i].style.color = 'white';
    evenFruit[i].style.borderRadius = '5px';
}

// New One
const h3Tag = document.createElement('h3');
const head = document.createTextNode('Buy high quality');
h3Tag.style.fontStyle='italic'
h3Tag.appendChild(head);
const divTag = document.querySelector('#header');
divTag.appendChild(h3Tag);


const pTag = document.createElement('p');
const para = document.createTextNode('Total fruits: 4');
pTag.appendChild(para);

const divs = document.querySelectorAll('div');
const secDiv = divs[1];
secDiv.appendChild(pTag);

const fruits = document.querySelector('.fruits');
secDiv.insertBefore(pTag, fruits);

pTag.id = 'fruits-total';
