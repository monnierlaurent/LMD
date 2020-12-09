const btnSuivant1 = document.getElementById('btn_suivant_1');
const btnSuivant2 = document.getElementById('btn_suivant_2');
const btnSuivant3 = document.getElementById('btn_suivant_3');

const article1 = document.getElementById('article_img_1');
const article2 = document.getElementById('article_img_2');
const article3 = document.getElementById('article_img_3');


btnSuivant1.addEventListener('click', (event) => {

    article1.setAttribute('class', 'display-none');

    article2.setAttribute('class', 'amin_2 main_creation_article--seize--flex');

});

btnSuivant2.addEventListener('click', (event) => {

    article2.setAttribute('class', 'display-none');

    article3.setAttribute('class', 'amin_2 main_creation_article--seize--flex');

});