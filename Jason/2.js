let ajax = function () {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    xhr.onload = () => {

        var pstring = JSON.parse(xhr.responseText);

        var store = document.getElementById("store");

        store.innerHTML = pstring.FirstName + "  ," + pstring.LastName;

    };

    xhr.send();

}
