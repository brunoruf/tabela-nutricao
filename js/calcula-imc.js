let changeTitle = document.querySelector(".titulo")
changeTitle.textContent = "Joana Prado Nutrition"

let selectTr = document.querySelectorAll(".paciente")
    
for (let i = 0; i < selectTr.length; i++) {
    let paciente = selectTr[i]
    let infoPeso = paciente.querySelector(".info-peso")
    let peso = infoPeso.textContent
    let infoAltura= paciente.querySelector(".info-altura")
    let altura = infoAltura.textContent
    let imc = paciente.querySelector(".info-imc")
    let calcImc = mathImc(peso, altura)
    imc.textContent = calcImc 
}

function mathImc (peso, altura) {
    let calcImc = peso / (altura * altura)
    return calcImc.toFixed(1)
}