let callAjax = function () {
    let xhr = new XMLHttpRequest();


    // ready state 4
    xhr.onload = () => {
        console.log(xhr.responseText);

        // u can write dom operation here also

        const refjson = JSON.parse(xml.responseText);

        //using data
        domlogic(refjson);

    };


    xhr.open("GET", " https://reqres.in/api/users?page=2  ");

    xhr.send();


}


let domlogic = function (refjson) {
    let parent = document.getElementById(parent);

    for (let i = 0; i < refjson.length; i++) {
        const items = refjson[i];

    }


    let newelement = parent.children[0].cloneNode(true);
    newelement.innerhtml = item.first_name + " " + item.last_name;
    // "Rahul";


    parent.insertbefore(newelement, parent.firstChild);

}