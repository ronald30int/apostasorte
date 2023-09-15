const users = [
    { username: "admin", password: "5456", page: "página1.html" },
    { username: "admin", password: "4412", page: "página2.html" },
    { username: "admin", password: "7852", page: "página3.html" },
    { username: "admin", password: "1244", page: "página4.html" },
    { username: "admin", password: "6547", page: "página5.html" },
    { username: "admin", password: "3554", page: "página6.html" },
    { username: "admin", password: "7896", page: "página7.html" },
    { username: "admin", password: "1256", page: "página8.html" },
    { username: "admin", password: "4521", page: "página9.html" },
    { username: "admin", password: "4641", page: "página10.html" },
    { username: "admin", password: "3564", page: "página11.html" },
    { username: "admin", password: "6884", page: "página12.html" },
    { username: "admin", password: "3774", page: "página13.html" },
    { username: "admin", password: "6842", page: "página14.html" },
    { username: "admin", password: "1463", page: "página15.html" },
    { username: "admin", password: "7851", page: "página16.html" },
    { username: "admin", password: "4552", page: "página17.html" },
    { username: "admin", password: "6794", page: "página18.html" },
    { username: "admin", password: "5623", page: "página19.html" },
    { username: "admin", password: "8946", page: "página20.html" },
    { username: "admin", password: "6565", page: "página21.html" },
    { username: "admin", password: "6545", page: "página22.html" },
    { username: "admin", password: "3475", page: "página23.html" },
    { username: "admin", password: "4521", page: "página24.html" },
    { username: "admin", password: "7521", page: "página25.html" },
    { username: "admin", password: "6842", page: "página26.html" },
    { username: "admin", password: "2044", page: "página27.html" },
    { username: "admin", password: "0454", page: "página28.html" },
    { username: "admin", password: "0578", page: "página29.html" },
    { username: "admin", password: "0567", page: "página30.html" },
    // Adicione mais usuários conforme necessário
];

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    const user = users.find(user => user.username === usernameInput);

    if (user) {
        if (user.password === passwordInput) {
            // Redirecionar para a página correspondente após o login bem-sucedido
            window.location.href = user.page;
        } else {
            document.getElementById("login-status").textContent = "Senha incorreta.";
        }
    } else {
        document.getElementById("login-status").textContent = "Usuário não encontrado.";
    }
}
