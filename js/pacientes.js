/* let urlPacientes = 'https://api-pacientes.herokuapp.com/pacientes'

let selectTable = document.querySelector("#tabela-pacientes")

for (i=0; i<pacientes.length; i++){
    
}

*/

function carregaListaPacientes() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")
    xhr.addEventListener("load", function(){
        let resposta = xhr.responseText
        let pacientes = JSON.parse(resposta)
            for (i=0; i < pacientes.length; i++){
                let paciente = pacientes[i]
                carregaPacientes(paciente)
            }
    })
    xhr.send()
}

carregaListaPacientes() 