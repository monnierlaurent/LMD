const divBorder1 = document.getElementById('border_1');
const divBorder2 = document.getElementById('border_2');
const divBorder3 = document.getElementById('border_3');
const divBorder4 = document.getElementById('border_4');
const divBorder5 = document.getElementById('border_5');
const divBorder6 = document.getElementById('border_6');

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

const parag1 = document.getElementById('border_1');
const parag2 = document.getElementById('border_2');
const parag3 = document.getElementById('border_3');
const parag4 = document.getElementById('border_4');


const div0 = document.getElementById('div_0');
const div1 = document.getElementById('div_1');
const div2 = document.getElementById('div_2');
const div3 = document.getElementById('div_3');
const div4 = document.getElementById('div_4');


const crossHide1 = document.getElementById('cross_hide_1');
const crossHide2 = document.getElementById('cross_hide_2');
const crossHide3 = document.getElementById('cross_hide_3');
const crossHide4 = document.getElementById('cross_hide_4');


//div  main_div2--flex--style

//display-none

// animation_display  animation_hide

parag1.addEventListener('click', (event) => {

    if (div1.className === ('main_div2--flex--style animation_display')) {

        div1.setAttribute('class', 'main_div2--flex--style animation_hide');

        setTimeout(() => {
            div1.setAttribute('class', 'display-none');
        }, 200);
    } else {
        div0.setAttribute('class', 'display-none');
        div1.setAttribute('class', 'main_div2--flex--style animation_display');
        div2.setAttribute('class', 'display-none');
        div3.setAttribute('class', 'display-none');
        div4.setAttribute('class', 'display-none');


    };
    crossHide1.addEventListener('click', (event) => {

        div0.setAttribute('class', 'display-none');
        div1.setAttribute('class', 'main_div2--flex--style animation_hide');
        div2.setAttribute('class', 'display-none');
        div3.setAttribute('class', 'display-none');
        div4.setAttribute('class', 'display-none');


        setTimeout(() => {
            div1.setAttribute('class', 'display-none');
        }, 200);
    });

});

parag2.addEventListener('click', (event) => {

    if (div2.className === ('main_div2--flex--style animation_display')) {


        div2.setAttribute('class', 'main_div2--flex--style animation_hide');

        setTimeout(() => {
            div2.setAttribute('class', 'display-none');
        }, 200);

    } else {

        div0.setAttribute('class', 'display-none');
        div1.setAttribute('class', 'display-none');
        div2.setAttribute('class', 'main_div2--flex--style animation_display');
        div3.setAttribute('class', 'display-none');
        div4.setAttribute('class', 'display-none');
    };

    crossHide2.addEventListener('click', (event) => {

        div0.setAttribute('class', 'display-none');
        div1.setAttribute('class', 'display-none');
        div2.setAttribute('class', 'main_div2--flex--style animation_hide');
        div3.setAttribute('class', 'display-none');
        div4.setAttribute('class', 'display-none');

        setTimeout(() => {
            div2.setAttribute('class', 'display-none');
        }, 200);
    });

});

parag3.addEventListener('click', (event) => {

    if (div3.className === ('main_div2--flex--style animation_display')) {


        div3.setAttribute('class', 'main_div2--flex--style animation_hide');

        setTimeout(() => {
            div2.setAttribute('class', 'display-none');
        }, 200);

    } else {

        div0.setAttribute('class', 'display-none');
        div1.setAttribute('class', 'display-none');
        div2.setAttribute('class', 'display-none');
        div3.setAttribute('class', 'main_div2--flex--style animation_display');
        div4.setAttribute('class', 'display-none');
    };

    crossHide3.addEventListener('click', (event) => {

        div0.setAttribute('class', 'display-none');
        div1.setAttribute('class', 'display-none');
        div2.setAttribute('class', 'display-none');
        div3.setAttribute('class', 'main_div2--flex--style animation_hide');
        div4.setAttribute('class', 'display-none');

        setTimeout(() => {
            div3.setAttribute('class', 'display-none');
        }, 200);
    });

});

parag4.addEventListener('click', (event) => {

    if (div4.className === ('main_div2--flex--style animation_display')) {


        div4.setAttribute('class', 'main_div2--flex--style animation_hide');

        setTimeout(() => {
            div4.setAttribute('class', 'display-none');
        }, 200);

    } else {

        div0.setAttribute('class', 'display-none');
        div1.setAttribute('class', 'display-none');
        div2.setAttribute('class', 'display-none');
        div3.setAttribute('class', 'display-none');
        div4.setAttribute('class', 'main_div2--flex--style animation_display');
    };

    crossHide4.addEventListener('click', (event) => {

        div0.setAttribute('class', 'display-none');
        div1.setAttribute('class', 'display-none');
        div2.setAttribute('class', 'display-none');
        div3.setAttribute('class', 'display-none');
        div4.setAttribute('class', 'main_div2--flex--style animation_hide');

        setTimeout(() => {
            div4.setAttribute('class', 'display-none');
        }, 200);
    });

});