function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "sispnbrasil" && senha == "sispn123") {
        alert('bem vindo SISPN');
        location.href = "home.html"
    }else {
        alert('Login ou senha incorreta')
    }
}