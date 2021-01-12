displayFooter = () => {
    const btnFooter = document.getElementById('btn_footer');
    const footer = document.getElementById('footer_1');

    btnFooter.addEventListener('click', (event) => {

        event.preventDefault();

        if (footer.className === 'display-none') {

            footer.setAttribute('class', 'footer__liste--flex-style');
        } else {
            footer.setAttribute('class', 'display-none');

        };
    });
};

//displayFooter();

displayArticle = () => {
    const parag1 = document.getElementById('parag_1');
    const parag2 = document.getElementById('parag_2');
    const parag3 = document.getElementById('parag_3');
    const parag4 = document.getElementById('parag_4');

    const article1 = document.getElementById('article_1');
    const article2 = document.getElementById('article_2');
    const article3 = document.getElementById('article_3');
    const article4 = document.getElementById('article_4');

    parag1.addEventListener('click', (event) => {
        event.preventDefault();

        if (article1.className === 'display-none') {
            article1.setAttribute('class', 'main_article--flex--style');
            article2.setAttribute('class', 'display-none');
            article3.setAttribute('class', 'display-none');
            article4.setAttribute('class', 'display-none');
        } else {
            article1.setAttribute('class', 'display-none');
        }
    });

    parag2.addEventListener('click', (event) => {
        event.preventDefault();

        if (article2.className === 'display-none') {
            article1.setAttribute('class', 'display-none');
            article2.setAttribute('class', 'main_article--flex--style');
            article3.setAttribute('class', 'display-none');
            article4.setAttribute('class', 'display-none');
        } else {
            article2.setAttribute('class', 'display-none');
        }
    });

    parag3.addEventListener('click', (event) => {
        event.preventDefault();

        if (article3.className === 'display-none') {
            article1.setAttribute('class', 'display-none');
            article2.setAttribute('class', 'display-none');
            article3.setAttribute('class', 'main_article--flex--style');
            article4.setAttribute('class', 'display-none');
        } else {
            article3.setAttribute('class', 'display-none');
        }
    });

    parag4.addEventListener('click', (event) => {
        event.preventDefault();

        if (article4.className === 'display-none') {
            article1.setAttribute('class', 'display-none');
            article2.setAttribute('class', 'display-none');
            article3.setAttribute('class', 'display-none');
            article4.setAttribute('class', 'main_article--flex--style');
        } else {
            article4.setAttribute('class', 'display-none');
        }
    });
};
//displayArticle();


const divBorder1 = document.getElementById('border1');
const divBorder2 = document.getElementById('border2');
const divBorder3 = document.getElementById('border3');
const divBorder4 = document.getElementById('border4');
const divBorder5 = document.getElementById('border5');
const divBorder6 = document.getElementById('border6');

divBorder1.addEventListener('mouseover', event => {

    divBorder2.setAttribute('class', 'main__div__p--style border__radius--top');

    divBorder1.addEventListener('mouseout', event => {
        divBorder2.setAttribute('class', 'main__div__p--style');
        divBorder1.setAttribute('class', 'main__div__p--style border--style-1');
    });
});

divBorder2.addEventListener('mouseover', event => {

    divBorder1.setAttribute('class', 'main__div__p--style border__radius--bottom--div1');
    divBorder3.setAttribute('class', 'main__div__p--style border__radius--top');

    divBorder2.addEventListener('mouseout', event => {

        divBorder1.setAttribute('class', 'main__div__p--style border--style-1');
        divBorder3.setAttribute('class', 'main__div__p--style');

    });
});

divBorder3.addEventListener('mouseover', event => {

    divBorder2.setAttribute('class', 'main__div__p--style border__radius--bottom');
    divBorder4.setAttribute('class', 'main__div__p--style border__radius--top');

    divBorder3.addEventListener('mouseout', event => {

        divBorder2.setAttribute('class', 'main__div__p--style');
        divBorder4.setAttribute('class', 'main__div__p--style border--style');
    });
});

divBorder4.addEventListener('mouseover', event => {

    divBorder3.setAttribute('class', 'main__div__p--style border__radius--bottom');
    divBorder5.setAttribute('class', 'main__div__p--style border__radius--top');

    divBorder4.addEventListener('mouseout', event => {

        divBorder3.setAttribute('class', 'main__div__p--style');
        divBorder4.setAttribute('class', 'main__div__p--style border--style');
        divBorder5.setAttribute('class', 'main__div__p--style border--style');
    });
});

divBorder5.addEventListener('mouseover', event => {

    divBorder4.setAttribute('class', 'main__div__p--style border__radius--bottom');
    divBorder6.setAttribute('class', 'main__div__p--style border__radius--top--div2');

    divBorder5.addEventListener('mouseout', event => {


        divBorder4.setAttribute('class', 'main__div__p--style border--style');
        divBorder6.setAttribute('class', 'main__div__p--style border--style-2');
    });
});

divBorder6.addEventListener('mouseover', event => {

    divBorder5.setAttribute('class', 'main__div__p--style border__radius--bottom');


    divBorder6.addEventListener('mouseout', event => {


        divBorder5.setAttribute('class', 'main__div__p--style border--style');
        divBorder6.setAttribute('class', 'main__div__p--style border--style-2');
    });
});