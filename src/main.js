// let valorHora = (valorProjeto / (diasTrab * 4 * horasTrabDia) ) + ( ( diasFerias * diasTrab * horasTrabDia ) );

const container = document.getElementById('container');
const accordionList = document.getElementById('accordion-list');

function main() {
    accordionList.innerHTML = '';
    accordionList.innerHTML += `<div class='col'>
                                    <img src='./src/img/heart-logo.png' class='img-header'/>
                                    <h1 class='h1'>Calculadora de Freelas</h1>
                                </div>`;
    accordionList.innerHTML += `<div class='col'>
                                    <button class='btn-lg' onclick='setAccordionList(1);'><span>Iniciar Cálculos </span></button>
                                </div>`;
    
    fadeIn(accordionList);
}

function investTime() {
    fadeOut(accordionList);

    setTimeout(() => {
        accordionList.innerHTML = '';
        accordionList.innerHTML += `<div class='col text-center text-vertical-center'>
                                        <h1 class='h1'>Tempo diário investido no projeto</h1>
                                    </div>`;
        accordionList.innerHTML += `<div class='col'>
                                        <p class='p'>Agora vamos entender um pouco mais sobre esses fatores começando pelo fator tempo diário investido. Quando tratamos de freelances, há uma certa demanda do seu tempo em off. Ou seja: depois do trabalho, escola ou aquele tempinho vago no final do dia que você usa pra relaxar e descontrair. Esse tempo é algo muito valioso para qualquer pessoa, certo? Então claramente temos que levar esse fator em consideração.</p>
                                    </div>`;
        
        accordionList.innerHTML += `<div class='col text-center'>
                                        <input type='number' /> horas
                                    </div>`;

        accordionList.innerHTML += `<div class='col text-vertical-top'>
                                        <button class='btn-lg' onclick='setAccordionList(2);'><span>Próximo </span></button>
                                    </div>`;
        
        fadeIn(accordionList);
    }, 1200);    
}

function workTime() {
    fadeOut(accordionList);

    setTimeout(() => {
        accordionList.innerHTML = '';
        accordionList.innerHTML += `<div class='col text-center text-vertical-center'>
                                        <h1 class='h1'>Dias efetivos trabalhando</h1>
                                    </div>`;
        accordionList.innerHTML += `<div class='col'>
                                        <p class='p'>Outro fator é a quantidade de dias efetivos que você irá disponibilizar para trabalhar no projeto. Não há nenhuma garantia que você poderá trabalhar todos os dias e de fato lidar com o processo de confirmar tudo com o cliente. Logo, você terá que cotar uma quantidade de dias específicos para lidar com todo o processo, sendo ele a parte comercial e desenvolvimento.</p>
                                    </div>`;
        
        accordionList.innerHTML += `<div class='col text-center'>
                                        <input type='number' /> dias
                                    </div>`;

        accordionList.innerHTML += `<div class='col text-vertical-top'>
                                        <button class='btn-lg' onclick='setAccordionList(3);'><span>Próximo </span></button>
                                    </div>`;
        
        fadeIn(accordionList);
    }, 1200);    
}

function setAccordionList(index) {
    switch (index) {
        case 0:
            main();
            break;

        case 1:
            investTime();
            break;

        case 2:
            workTime();
            break;

        default:
            main();
            break;
    }
}

function fadeIn(element) {
    element.style.opacity = 1;
}

function fadeOut(element) {
    element.style.opacity = 0;
}

main();