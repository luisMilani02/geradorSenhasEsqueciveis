let escolha = document.getElementById('valor')
let valorAtual = document.getElementById('escolha')
let senha = document.getElementById('senha')


function val() {
    escolha.innerHTML = valorAtual.value * 2
}

function criarSenha() {
    let letras = ['a','b','c','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    senha.textContent = ''

    for (let i = 0; i < valorAtual.value; i++) {
        let letra = Math.floor(Math.random() * letras.length)
        let num = Math.floor(Math.random() * 10)

        maiMinu = Math.floor(Math.random() * 3)
        iniFim = Math.floor(Math.random() * 2)

        if (iniFim == 0) {
            if (maiMinu == 1) {
                let letraM = letras[letra].toString().toUpperCase()
                senha.textContent = senha.textContent + num + letraM
            } else {
                senha.textContent = senha.textContent + num + letras[letra]
            }
        } else {
            if (maiMinu == 1) {
                let letraM = letras[letra].toString().toUpperCase()
                senha.textContent = senha.textContent + letraM + num
            } else {
                senha.textContent = senha.textContent + letras[letra] + num
            }
        }           
    }
}