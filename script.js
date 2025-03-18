let escolha = document.getElementById('valor')
let valorAtual = document.getElementById('escolha')
let senha = document.getElementById('senha')

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

    let tamSenha = senha.textContent.length;
    if (tamSenha >= 22) {
        senha.style.fontSize = '23px';
    } else if (tamSenha >= 18) {
        senha.style.fontSize = '25px';
    } else {
        senha.style.fontSize = '30px';
    }
}