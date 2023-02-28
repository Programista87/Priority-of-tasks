/*function log (){

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if (username === "" && password === "") {

        localStorage.setItem("loggedIn",username);

        window.location.href = "views/pages/home.ejs";
    } else {
        alert("Bad login data");
    }
}

    function createAccount(username, password) {
        let account = {
            username: username,
            password: password,
            balance: 0
        };

        localStorage.setItem("account", JSON.stringify(account));

        return account;
    }

    let newAccount = createAccount("", "");
    console.log(newAccount);*/

function log() {
    // Pobierz dane z formularza
    let  username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Tworzymy obiekt z danymi do wysłania na serwer
    let data = {
        username: username,
        password: password
    };


    // Konwertujemy obiekt na format JSON
    let jsonData = JSON.stringify(data);

    // Tworzymy nowe żądanie HTTP
    let xhr = new XMLHttpRequest();

    // Otwieramy połączenie z serwerem
    //xhr.open("POST", "http://localhost/login", true);

    // Ustawiamy nagłówek content-type na "application/json"
    //xhr.setRequestHeader("Content-Type", "application/json");

    // Wykonujemy żądanie
    xhr.send(jsonData);

    // Obsługa odpowiedzi z serwera
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Logowanie powiodło się
            const response = JSON.parse(xhr.responseText);
            alert("Zalogowano pomyślnie! Witaj " + response.username + "!");
        } else {
            // Logowanie nie powiodło się
            alert("Błąd logowania: " + xhr.responseText);
        }
    }
}