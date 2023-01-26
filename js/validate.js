function validate() {
    var uname = document.getElementById("uname").value;
    var pwd = document.getElementById("pwd").value;

    if (uname.length == 0 || uname == null) {
        alert("You must enter a username.");
        return false;
    }

    if (pwd.length == 0 || pwd == null) {
        alert("You must enter a password");
        return false;
    }
}

