let campoFiltro = document.querySelector("#filtro")
campoFiltro.addEventListener("input", filtrarTabela)


function filtrarTabela() {
    let txtBusca = campoFiltro.value
    let selectNames = document.querySelectorAll(".info-nome")
    let expressao = new RegExp(txtBusca,"i")

    if (txtBusca.length > 0) {
        for (i=0; i < selectNames.length; i++) {
            if(expressao.test(selectNames[i].textContent)) {
                selectNames[i].parentNode.style.display = 'table-row'
            } else {
                selectNames[i].parentNode.style.display = 'none'
            }
        }
    } else {
        for (i=0; i < selectNames.length; i++) {
            selectNames[i].parentNode.style.display = 'table-row'
        }
    }
}