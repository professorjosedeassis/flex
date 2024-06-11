/**
 * App - Flex
 * @author Professor José de Assis
 * @link https://joseassis.com.br/
 */

let etanol, gasolina, kmEtanol, kmGasolina

function calcular() {
    // pegar valore dos inputs
    etanol = Number(document.getElementById('etanol').value)
    gasolina = Number(document.getElementById('gasolina').value)
    kmEtanol = Number(document.getElementById('kmEtanol').value)
    kmGasolina = Number(document.getElementById('kmGasolina').value)
    console.log(etanol,gasolina,kmEtanol,kmGasolina)

    if (etanol === 0) {
        
       document.getElementById('etanol').classList.add('error')
    }
}

function limpar() {
    document.getElementById("status").src="./img/flex.png"
}