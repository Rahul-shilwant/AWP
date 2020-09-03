let callAjax = function () {

    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");

    // ready state 4

    xhr.onload = () => {

        // console.log(xhr.responseText);

        var obj = JSON.parse(xhr.responseText);

        var para = document.getElementById("para");

        para.innerHTML = obj.FirstName + ", " + obj.LastName;



        // u can write dom operation here also

        // const refjson = JSON.parse(xml.responseText);

        //using data
        // domlogic(refjson);

    };

    xhr.send();

}
