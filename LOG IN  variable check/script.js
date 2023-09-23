

function Abc() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    if (username === "" && password === "") {

        document.getElementById("body").style.background = "#C67767";
        alert("Username and password are required!");
    }
    else {
        window.location.href = "http://127.0.0.1:5500/logiin_details.html";
    }

    // var b = document.getElementById('username').value

    // document.getElementById('here').innerHTML = b;

    // localStorage.setItem("NAME", username);
    // localStorage.setItem("PASSWORD", password);

    // return;

}



window.addEventListener('load', () => {
    const params = new URL(document.location).searchParams;
    const username = params.get('username');
    const password = params.get('password');

    document.getElementById("usernameData").innerHTML = username;
    document.getElementById("passwordData").innerHTML = password
});