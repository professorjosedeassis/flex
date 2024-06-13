/**
 * App - Flex
 * @author Professor José de Assis
 * @link https://joseassis.com.br/
 */

function calcular() {
    // pegar valores dos inputs
    let gasolina = Number(document.getElementById('gasolina').value)
    let etanol = Number(document.getElementById('etanol').value)
    let kmGasolina = Number(document.getElementById('kmGasolina').value)
    let kmEtanol = Number(document.getElementById('kmEtanol').value)    
    // calcular a vantagem
    vantagem = (etanol / kmEtanol) / (gasolina / kmGasolina)
    //console.log(vantagem)
    // exbir o melhor custo/benefíco   
    if (vantagem > 1) {
        document.getElementById("status").src = "./img/gasolina.png"       
    } else if (vantagem < 1) {
         document.getElementById("status").src = "./img/etanol.png"
    } else {
        document.getElementById("status").src = "./img/flex.png"
    }
}