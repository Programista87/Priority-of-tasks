function register() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if (localStorage.getItem(username)) {

        alert("User in a database");
    } else {
        localStorage.setItem(username, password);
        localStorage.setItem("loggedIn", true);
        window.location.href = "/views/pages/home";
    }
}
