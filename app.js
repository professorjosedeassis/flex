/**
 * App - Flex
 * @author Professor José de Assis
 * @link https://joseassis.com.br/
 */

let gasolina, etanol, kmGasolina, kmEtanol, vantagem

function calcular() {
    // pegar valores dos inputs
    gasolina = Number(document.getElementById('gasolina').value)
    etanol = Number(document.getElementById('etanol').value)
    kmGasolina = Number(document.getElementById('kmGasolina').value)
    kmEtanol = Number(document.getElementById('kmEtanol').value)
   // console.log(gasolina, etanol, kmGasolina, kmEtanol)

    // validação dos campos
    if (gasolina === 0) {
        alert("Preencha o valor da gasolina")        
        document.getElementById('gasolina').focus()
    } else if (etanol === 0) {
        alert("Preencha o valor do etanol") 
        document.getElementById('etanol').focus()
    } else if (kmGasolina === 0) {
        alert("Preencha o consumo médio de gasolina (km/L)") 
        document.getElementById('kmGasolina').focus()
    } else if (kmEtanol === 0) {
        alert("Preencha o consumo médio de etanol (km/L)") 
        document.getElementById('kmEtanol').focus()
    } else {       
        // calcular a vantagem
        vantagem = (etanol / kmEtanol) / (gasolina / kmGasolina)
        //console.log(vantagem)
        // exbir o melhor custo/benefíco   
        if (vantagem < 1) {
            document.getElementById("status").src = "./img/etanol.png"
        } else {           
            document.getElementById("status").src = "./img/gasolina.png"
        }
    }
}

function limpar() {
    document.getElementById("status").src = "./img/flex.png"
}