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