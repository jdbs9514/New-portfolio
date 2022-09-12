const arrowDown = document.querySelector('.arrow');

const elementsArr = [
  {
    framework: '<img class="column" src="./assets/bootstrap.png" alt="">Bootstrap',
  },

  {
    framework: '<img class="column" src="./assets/sass.png" alt="">Sass',
  },

  {
    framework: '<img class="column" src="./assets/webpack.png" alt="">Webpack',
  },

  {
    framework: '<img class="column" src="./assets/react.png" alt="">React.js',
  },

  {
    framework: '<img class="column" src="./assets/jest.png" alt="">Jest',
  },
];

const ulDiv = document.querySelector('.div-ol');

const list = document.createElement('ul');
list.classList.add('frameworks-skills');
ulDiv.appendChild(list);

for (let i = 0; i < elementsArr.length; i += 1) {
  const firstElement = document.createElement('li');
  firstElement.innerHTML = elementsArr[i].framework;
  list.appendChild(firstElement);
}

arrowDown.addEventListener('click', () => {
  list.classList.toggle('active');
  arrowDown.classList.toggle('active');
});
