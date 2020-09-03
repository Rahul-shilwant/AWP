let callAjax = function () {

    let xhr = new XMLHttpRequest();


    xhr.open("GET", "https://fakerestapi.azurewebsites.net/api/Authors");


    xhr.onload = () => {

        console.log(xhr.responseText);

        //for structured data

        const refjason = jason.parse(xhr.responseText);
        console.log(refjason);

    };


    xhr.send();
};

