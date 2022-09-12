const arrow = document.querySelector('.arrow-down');
const divUl = document.querySelector('.div-ul');

const unsortedList = document.createElement('ul');
unsortedList.classList.add('languajes-skills');
divUl.appendChild(unsortedList);

const firstElement = document.createElement('li');
firstElement.classList.add('html-skill');
firstElement.innerHTML = '<img class="column" src="./assets/html5.png" alt="">HTML5</li>';
unsortedList.appendChild(firstElement);

const secondElement = document.createElement('li');
secondElement.classList.add('css-skill');
secondElement.innerHTML = '<img class="column" src="./assets/css3.png" alt="">CSS3</li>';
unsortedList.appendChild(secondElement);

const thirdElement = document.createElement('li');
thirdElement.classList.add('js-skill');
thirdElement.innerHTML = '<img class="column" src="./assets/JS.png" alt="">JavaScript</li>';
unsortedList.appendChild(thirdElement);

arrow.addEventListener('click', () => {
  unsortedList.classList.toggle('active');
  arrow.classList.toggle('active');
});
