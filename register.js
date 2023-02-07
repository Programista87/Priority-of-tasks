function register() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if (localStorage.getItem('username')) {

        alert("User in a database");
    } else {

        localStorage.setItem(username, password);


        window.location.href = "/views/home";
    }
}
debugger