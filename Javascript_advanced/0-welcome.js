function welcome(firstname, lastname) {
    let fullname = firstname + "" + lastname;
    function displayFullname() {
        alert("welcome " + fullname + "!")
    }
    displayFullname();
}