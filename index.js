
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
basketHeading.style.border;
basketHeading.style.color = 'green';

const thanks = document.getElementById('thanks');
thanks.innerHTML = '<p>Please visit us again</p>';