displayFooter = () => {
    const btnFooter = document.getElementById('btn_footer');
    const footer = document.getElementById('footer_1');

    btnFooter.addEventListener('click', (event) => {

        event.preventDefault();
        if (footer.className === 'display-none') {
            console.log('visible');
            footer.setAttribute('class', 'footer__liste--flex-style');
        } else {
            footer.setAttribute('class', 'display-none');
            console.log('invisible')
        };
    });
};

displayFooter();

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