var likecounter = 1;



function comment() {

    var userinput = document.querySelector("#cmnt").value;

    var clone = document.querySelector("#referenceid").cloneNode(true);
    clone.removeAttribute("id");
    clone.style.visibility = "visible";
    clone.style.color = "red";

    // all userinput to clone comment
    clone.children[0].innerHTML = userinput;




    const commentbox = document.querySelector("#commentbox");

    commentbox.appendChild(clone);
    // commentbox.insertBefore(clone, commentbox.firstChild);


    document.querySelector("#cmnt").value = " ";


}

function deleteelement() {

    let btnElement = document.querySelector("#deleteelement");

    btnElement.parentElement.remove();
}