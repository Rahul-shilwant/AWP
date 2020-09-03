var likecounter = 1;

function like() {

    likecounter++;

    var likebtn = document.querySelector("#likebtn");

    likebtn.innerHTML = "Like" + " " + likecounter;


}



// for conmment
// 1.get input element
// 2.create new element to store fetch input value
// 3.select commentox to store that comment
// 4.insert value or append to the commentbox




function comment() {

    var inputelement = document.querySelector("#cmnt").value;


    var newelement = document.createElement("div");
    // newelement.textContent = inputelement;



    var child1 = document.createElement("div");
    var child2 = document.createElement("button");

    child1.textContent = inputelement;
    child2.textContent = "Delete";

    newelement.appendChild(child1);
    newelement.appendChild(child2);



    var commentelement = document.querySelector("#Commentbox");

    // commentelement.appendChild(newelement);
    commentelement.insertBefore(newelement, commentelement.firstChild);

    document.querySelector("#cmnt").value = " ";

}