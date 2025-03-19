let escolha = document.getElementById('valor')
let valorAtual = document.getElementById('escolha')
let senha = document.getElementById('senha')
let larguraTela = window.innerWidth

function val() {
    escolha.innerHTML = valorAtual.value * 2
}

function criarSenha() {
    let letras = ['a','b','c','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','*','#','@']
    senha.textContent = ''  // Limpa o conteúdo da senha
    senha.style.fontSize = '30px';  // Tamanho de fonte inicial

    // Gerar a senha
    for (let i = 0; i < valorAtual.value; i++) {
        let letra = Math.floor(Math.random() * letras.length)
        let num = Math.floor(Math.random() * 10)
        let maiMinu = Math.floor(Math.random() * 3)
        let iniFim = Math.floor(Math.random() * 2)
        let tamSenha = senha.textContent.length
        console.log(`Largura da tela: ${larguraTela}`)
        
        if (iniFim == 0) {
            if (maiMinu == 1) {
                let letraM = letras[letra].toUpperCase()
                senha.textContent += num + letraM
            } else {
                senha.textContent += num + letras[letra]
            }
        } else {
            if (maiMinu == 1) {
                let letraM = letras[letra].toUpperCase()
                senha.textContent += letraM + num
            } else {
                senha.textContent += letras[letra] + num
            }
        }
    }
    
    if (larguraTela <= 380) {  // Telas menores que 380px
        console.log('Entrou na condição de tela <= 380px')
        if (tamSenha >= 23) {
            senha.style.fontSize = '10px';
        } else if (tamSenha >= 19) {
            senha.style.fontSize = '11px';
        } else if (tamSenha >= 16) {
            senha.style.fontSize = '15px';
        } else {
            senha.style.fontSize = '18px';
        }
    } else if (larguraTela <= 560) { // Telas entre 380px e 560px
        console.log('Entrou na condição de tela <= 560px')
        if (tamSenha >= 23) {
            senha.style.fontSize = '18px';
        } else if (tamSenha >= 19) {
            senha.style.fontSize = '22px';
        } else if (tamSenha >= 16) {
            senha.style.fontSize = '25px';
        } else {
            senha.style.fontSize = '30px';
        }
    } else if (larguraTela <= 1000) { // Telas entre 560px e 800px
        console.log('Entrou na condição de tela <= 1000px')
        senha.style.fontSize = '30px';
    } else { // Telas maiores que 800px
        console.log('Entrou na condição de tela >= 1000px')
        senha.style.fontSize = '35px';
    }
        
}