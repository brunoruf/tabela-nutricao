let button = document.querySelector("#adicionar-paciente")
button.addEventListener("click", addPaciente)

function carregaPacientes(pacienteCadastrado){
    let selectTable = document.querySelector("#tabela-pacientes")
    let newButton = createTdButton()
    let newTr = createTr(pacienteCadastrado, newButton);
    selectTable.appendChild(newTr)
    return
}


function addPaciente(event){
    event.preventDefault()
    
    let selectTable = document.querySelector("#tabela-pacientes")
    let selectForm = document.querySelector("#form-adiciona")
    
    let paciente = createNewPaciente(selectForm)
    let newButton = createTdButton()
    let newTr = createTr(paciente, newButton);
    
    // Validação
    let valPeso = validaPeso(paciente);
    let valAltura = validaAltura(paciente)
    let valMessage = document.querySelector(".mensagem-validacao")
    let valNome = validaNome(paciente)

    if(valNome && valAltura && valPeso) {
        selectTable.appendChild(newTr)
        valMessage.classList.remove("active")
        selectForm.reset()
    } if(!valNome){
        valMessage.textContent = 'Nome inválido'
        valMessage.classList.add("active") 
    } if(!valAltura) {
        valMessage.textContent = 'Altura inválida'
        valMessage.classList.add("active")
    } if(!valPeso){
        valMessage.textContent = 'Peso inválido'
        valMessage.classList.add("active")     
    } if(!valPeso && !valAltura){
        valMessage.textContent = 'Peso e altura inválidos'
        valMessage.classList.add("active")
    } if(!valNome && !valPeso && !valAltura){
        valMessage.textContent = 'Nome, Peso e altura inválidos'
        valMessage.classList.add("active")
    } 
}

function createNewPaciente(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: mathImc(form.peso.value, form.altura.value),
    }
    return paciente
}

function createTr(paciente) {

    let newTr = document.createElement("tr")

    newTr.appendChild(createTd("info-nome", paciente.nome))
    newTr.appendChild(createTd("info-peso", paciente.peso))
    newTr.appendChild(createTd("info-altura", paciente.altura))
    newTr.appendChild(createTd("info-gordura", paciente.gordura))
    newTr.appendChild(createTd("info-imc", paciente.imc))
    newTr.appendChild(createTdButton("info-actions"))
    newTr.classList.add("paciente")
    return newTr
}

function createTd(classe, dadoPaciente) {
    let newTd = document.createElement("td")
    newTd.classList.add(`"${classe}"`)
    newTd.textContent = dadoPaciente

    return newTd
}

function createTdButton(classe){
    let newButtonTd = document.createElement("td")
    let newButtonRemover = document.createElement("button")
    newButtonTd.classList.add(`"${classe}"`)
    
    newButtonTd.appendChild(newButtonRemover)
    newButtonRemover.textContent = 'Remover'
    newButtonRemover.classList.add("btn-remover")
    newButtonTd.appendChild(newButtonRemover)
    newButtonRemover.addEventListener("click", removeTr)

    return newButtonTd
}

function validaPeso(paciente){
    if(paciente.peso > 30 && paciente.peso < 400){
        return true;
    }
}

function validaAltura(paciente){
    if(paciente.altura > 1.30 && paciente.altura < 2.5){
        return true;
    }
}

function validaNome(paciente){
    if(paciente.nome.length > 1){
        return true;
    }
}


let btnRemover = document.querySelectorAll(".btn-remover")
btnRemover.forEach(item => {item.addEventListener("click", removeTr)})

function removeTr(event) {
    let currentTr = event.target.parentNode.parentNode
    let currentTable = document.querySelector("#tabela-pacientes")
    currentTr.classList.add("remove")
    setTimeout(function() {
        currentTable.removeChild(currentTr)
    }, 400)
}