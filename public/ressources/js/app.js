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

displayFooter();

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
displayArticle();

validFormContact = () => {
    //---récuperation des champs du formulaire---//
    const nom = document.getElementById('nom');
    const prenom = document.getElementById('prenom');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    //---récuperation des messages du formulaire---//
    const messageNom = document.getElementById('message_nom');
    const messagePrenom = document.getElementById('message_prenom');
    const messageEmail = document.getElementById('message_email');
    const messageMessage = document.getElementById('message_message');
    const messageGlobal = document.getElementById('message_global');

    //---création des regex---//

    //---logique de validation---//

};