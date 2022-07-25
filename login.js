function login() {

    var inputNickname = document.getElementById('nickname').value;
    var nickname = inputNickname;

    var inputPassword = document.getElementById('password').value;
    var password = inputPassword;

    if (nickname === 'carolinadamasceno' && password === '123456') {
        document.getElementById('status').innerHTML = 'Login bem-sucedido!';
    } else {
        document.getElementById('status').innerHTML = 'Login não realizado.';
    }
}