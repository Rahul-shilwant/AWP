var likecounter = 1;

function likehere() {

    likecounter++;

    var likebtn = document.querySelector("#btnid");
    likebtn.innerHTML = "Like" + " " + likecounter;

}


function commentHere() {


    //get user input
    var usercomment = document.querySelector("#inputId1").value; //not taking innerhtml bcz its form element



    //create new element and add the retrive comment into that element
    const newelement = document.createElement("div");
    newelement.textContent = usercomment;

    // get queries from checkbox 
    var commentbox = document.querySelector("#commentBox");

    //now we want add new comment on top of previous comment

    // commentbox.appendChild(newelement); //append on previous comment 
    commentbox.insertBefore(newelement, commentbox.firstChild);

    document.querySelector("#inputId1").value = "";


    // css
    newelement.style.background = "grey";
    newelement.style.color = "white";
    newelement.style.margin = "4px";



}


