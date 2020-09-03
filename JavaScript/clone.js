function clone() {


    var melement = document.getElementById("parent").children[0];
    // console.log(melement);


    var cloneelement = melement.cloneNode(true);
    // console.log(cloneelement);

    var storediv = document.getElementById("commentbox");
    storediv.appendChild(cloneelement);

}   