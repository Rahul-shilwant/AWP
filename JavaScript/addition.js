function add() {

    var first = parseInt(document.querySelector("#fstinput").value);
    var second = parseInt(document.querySelector("#2ndinput").value);

    var c = first + second;

    document.getElementById("#ans").value = c;

}