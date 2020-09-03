let callajax = () => {


    let xhr = new XMLHttpRequest();

    xhr.open("get", "https://fakerestapi.azurewebsites.net/api/Authors", true);

    xhr.onload = () => {

        // console.log(xhr.responseText);

        let jasondata = JSON.parse(xhr.responseText);
        // console.log(jason);

        ajaxdom(jasondata);

    };

    xhr.send();


};

let ajaxdom = (jasondata) => {



    for (let item of jasondata) {
        // console.log(item);



        var storebox = document.getElementById("store").children[0];

        // without clone element 
        // storebox.innerHTML = item.FirstName + " " + item.LastName;


        var clone = storebox.cloneNode(true);

        clone.innerHTML = item.FirstName + " " + item.LastName;
        // clone.appendChild(storebox);

        storebox.insertBefore(clone, storebox.firstChild);
    }

};
