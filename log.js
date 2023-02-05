function login (){

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
    console.log(newAccount);
}
