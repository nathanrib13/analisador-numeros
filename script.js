
//definifno as variaveis, utilizando o DOM para pegar dados do HTML
//numbers é o imput onde a pessoas cooloca o numero
let numbers = document.getElementById('txtnum')
//lista será onde os valores digitados aparecerão 
let lista = document.getElementById('flista')
// res é o resultado onde os valores aparecerão 
let res = document.getElementById('res')
//definindo valores como uma string vazia pois ela receberá os dados do imput
let values = []

// função para conf
//REVER ESSA PARTE
function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 1000) {
        return true
    } else {
        return false
    }
}
//função para confirmar se o valor informado no imput ja está no array
function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
// função que automatiza o programa, gerada a partir do button no HTML e pleo onclick

//REVER ESSA PARTE
function adicionar() {
    if (isNumber(numbers.value) && !inList(numbers.value, values)) {
        values.push(Number(numbers.value))
        let item = document.createElement('option')
        item.text = `${numbers.value}`
        lista.appendChild(item)
        res.innerHTML = ''

    } else {
        window.alert('valor inválido ou já adicionado')
    }

    // atributos para após inserir esse valor, o button ficar vazio 
    numbers.value = ''
    // esse é para que o digitador fique já no campo de input para nao precisar clicar novamente nele 
    numbers.focus()


}
// função para finalizar e apresentar os resultados após todos os valores já terem sidos adicionados
function finalizar() {
    // condição para que caso nao tenha sido inserido nenhum valor, emita uma mensagem para que o usuário coloque
    if (values.length == 0) {
        window.alert('Adicione um valor antes de finalizar')
    } else {
        //caso esteja tudo ok:

        // determina o total de valores no imput
        let total = values.length
        //considera o primeiro valor como maior, pois teoricamente só existe ele 
        let maiorValor = values[0]
        //considera o primeiro vlaor como menor pois é o unicio
        let menorValor = values[0]
        // atribuindo a variavel soma como 0 pois ela ainda nao recebeu os valores
        let soma = 0
        // definindo a media como 0 pois ela ainda nao recebeu os valores 
        let media = 0

        //utilizando o metodo for 
        //REVER
        for (let pos in values) {
            soma += values[pos]
            if (values[pos] > maiorValor) {
                maiorValor = values[pos]
            }
            if (values[pos] < menorValor) {
                menorValor = values[pos]
            }
        }

        //Realizando o calculo de media
        media = soma / total

        //colocando os resultados na pagina
        res.innerHTML = ''
        res.innerHTML += `<p> Total de valores adicionados: <strong>${total}</strong>  </p>`
        res.innerHTML += `<p> Maior valor informando: <strong>${maiorValor}</strong></p>`
        res.innerHTML += `<p> Menor valor informado: <strong>${menorValor}</strong></p>`
        res.innerHTML += `<p> Soma de todos os valores: <strong>${soma}</strong></p>`
        res.innerHTML += `<p> Média dos valores: <strong>${media}</strong></p>`

    }

}

/*
considerações:
- rever a parte do metodo for 
- rever a parte do button adicionar 
- entender todo o código 
- pensar numa aplicação para o codio (que site é esse?)
*/ 