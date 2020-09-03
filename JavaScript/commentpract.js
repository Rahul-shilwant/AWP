var counter = 1;

function likebutton() {
    var lbtn = document.querySelector("#likebtn");

    counter++;

    lbtn.innerHTML = counter

}

function comment() {

    var userinput = document.querySelector("#inputcmt").value;


    var cloneelement = document.querySelector("#refcomment").cloneNode(true);



    var commentboxx = document.querySelector("#commentbox");


    commentboxx.appendChild(cloneelement);

    document.querySelector("#inputcmt") = " ";


}