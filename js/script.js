function start() {
    //var butttonCalculateImc = document.querySelector("#button-calculate-imc")
    // butttonCalculateImc = addEventListener('click', handleButtonClick);

    var inputMassa = document.querySelector('#input-weith');
    inputMassa = addEventListener('input', handleButtonClick);

    var inputAltura = document.querySelector('#input-heigth');
    inputAltura = addEventListener('input', handleButtonClick);

    //handleButtonClick();

}

function calculateImc(peso, altura) {
    return peso / (altura * altura);
}

function determinaGrauPeso(imc) {
    if (imc < 16) {
        grauPeso = 'valor inválido'
    } else if (imc >= 16 && imc < 17) {
        grauPeso = 'Muito Abaixo do peso'
    } else if (imc >= 17 && imc < 18.5) {
        grauPeso = 'abaixo do peso'
    } else if (imc >= 18.5 && imc < 25) {
        grauPeso = 'peso normal'
    } else if (imc >= 25 && imc < 30) {
        grauPeso = 'Acima do peso'
    } else if (imc >= 30 && imc < 35) {
        grauPeso = 'obesidade grau I'
    } else if (imc >= 35 && imc < 40) {
        grauPeso = 'obesidade grau II'
    } else {
        grauPeso = 'obesidade grau III'
    }
    return grauPeso
}

function handleButtonClick() {
    var inputMassa = document.querySelector('#input-weith')
    var massa = Number(inputMassa.value);

    var inputAltura = document.querySelector('#input-height')
    var altura = Number(inputAltura.value);

    var imcResult = document.querySelector('#imc-result')


    var imc = calculateImc(massa, altura)
    var formatingImc = imc.toFixed(2).replace('.', ',')
    imcResult.textContent = formatingImc;

    var grauPeso = document.querySelector('#grauIMC')
    var gP = determinaGrauPeso(imc)
    grauPeso.textContent = gP
    

    /*if ( imc < 16) {
        grauPeso.textContent = 'valor inválido'
    } else if (imc >= 16 && imc < 17) {
        grauPeso.textContent = 'Muito Abaixo do peso'
    } else if (imc >= 17 && imc < 18.5) {
        grauPeso.textContent = 'abaixo do peso'
    } else if (imc >= 18.5 && imc < 25) {
        grauPeso.textContent = 'peso normal'
    } else if (imc >= 25 && imc < 30) {
        grauPeso.textContent = 'Acima do peso'
    } else if (imc >= 30 && imc < 35) {
        grauPeso.textContent = 'obesidade grau I'
    } else if (imc >= 35 && imc < 40) {
        grauPeso.textContent = 'obesidade grau II'
    } else {
        grauPeso.textContent = 'obesidade grau III'
    }*/
}


start();