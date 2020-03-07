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
                                        <input type='number' id='investTime' /> horas
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
                                        <input type='number' id='workTime' /> dias
                                    </div>`;

        accordionList.innerHTML += `<div class='col text-vertical-top'>
                                        <button class='btn-lg' onclick='setAccordionList(3);'><span>Próximo </span></button>
                                    </div>`;
        
        fadeIn(accordionList);
    }, 1200);    
}

function vacationTime() {
    fadeOut(accordionList);

    setTimeout(() => {
        accordionList.innerHTML = '';
        accordionList.innerHTML += `<div class='col text-center text-vertical-center'>
                                        <h1 class='h1'>Dias de Férias do projeto</h1>
                                    </div>`;
        accordionList.innerHTML += `<div class='col'>
                                        <p class='p'>Qualquer modalidade de trabalho, seja CLT ou PJ, há seus encargos referentes à verba de férias e não seria diferente para lidar com um freela. Uma parte do valor da sua hora reflete diretamente na quantidade de dias que você deseja tirar "férias" com o valor total projeto.</p>
                                    </div>`;
        
        accordionList.innerHTML += `<div class='col text-center'>
                                        <input type='number' id='vacationTime' /> dias
                                    </div>`;

        accordionList.innerHTML += `<div class='col text-vertical-top'>
                                        <button class='btn-lg' onclick='setAccordionList(4);'><span>Próximo </span></button>
                                    </div>`;
        
        fadeIn(accordionList);
    }, 1200);    
}

function totalValue() {
    fadeOut(accordionList);

    setTimeout(() => {
        accordionList.innerHTML = '';
        accordionList.innerHTML += `<div class='col text-center text-vertical-center'>
                                        <h1 class='h1'>Valor total do Projeto</h1>
                                    </div>`;
        accordionList.innerHTML += `<div class='col'>
                                        <p class='p'>Não podemos esquecer do principal fator que é o total a ser recebido pelo freela. A partir desse valor, do quanto você desejaria ganhar em cima do trabalho, é feito o cálculo maior.</p>
                                    </div>`;
        
        accordionList.innerHTML += `<div class='col text-center'>
                                        <input type='number' id='totalValue' /> dias
                                    </div>`;

        accordionList.innerHTML += `<div class='col text-vertical-top'>
                                        <button class='btn-lg' onclick='setAccordionList(5);'><span>Próximo </span></button>
                                    </div>`;
        
        fadeIn(accordionList);
    }, 1200);    
}

function final() {
    fadeOut(accordionList);

    setTimeout(() => {
        accordionList.innerHTML = '';
        accordionList.innerHTML += `<div class='col text-center text-vertical-center'>
                                        <h1 class='h1'>Final</h1>
                                    </div>`;
        accordionList.innerHTML += `<div class='col'>
                                        <p class='p'></p>
                                    </div>`;

        accordionList.innerHTML += `<div class='col text-vertical-top'>
                                        <button class='btn-lg' onclick='setAccordionList(-1);'><span>Iniciar Novamente </span></button>
                                    </div>`;
        
        fadeIn(accordionList);
    }, 1200);    
}

function setAccordionList(index) {
    let _investTime = 0;
    let _workTime = 0;
    let _vacationTime = 0;
    let _totalValue = 0;

    switch (index) {
        case 0:
            main();
            break;

        case 1:
            investTime();
            break;

        case 2:
            _investTime = document.getElementById('investTime').value
            workTime();
            break;

        case 3:
            _workTime = document.getElementById('workTime').value
            vacationTime();
            break;

        case 4:
            _vacationTime = document.getElementById('vacationTime').value
            totalValue();
            break;

        case 5:
            _totalValue = document.getElementById('_totalValue').value
            main();
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