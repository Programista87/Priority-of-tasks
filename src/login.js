function login() {
    // Pobierz dane z formularza
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Tworzymy obiekt z danymi do wysłania na serwer
    const data = {
        username: username,
        password: password
    };


    // Konwertujemy obiekt na format JSON
    const jsonData = JSON.stringify(data);

    // Tworzymy nowe żądanie HTTP
    const xhr = new XMLHttpRequest();

    // Otwieramy połączenie z serwerem
    xhr.open("POST", "http://localhost/login", true);

    // Ustawiamy nagłówek content-type na "lication/json"
    xhr.setRequestHeader("Content-Type", "application/json");

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






