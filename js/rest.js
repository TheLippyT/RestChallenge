const baseUrl = 'https://restcountries.eu/rest/v2/name/';


function callCountries(){
    //create object for all headers and do a foreach
    let country = document.getElementById('countryName').value;
    fetch(baseUrl + country)
        .then(response => response.json())
        .then(data => {
            appendData(data);
        })
        function appendData(data){
            let container = document.getElementById('displayData');
                 for (let i = 0; i < data.length; i++) {
                    let nameDiv = document.createElement("div");
                    let capDiv = document.createElement("div");
                    nameDiv.innerHTML = 'name:'  + data[i].name ;
                    capDiv.innerHTML = 'capital: ' + data[i].capital;
                    container.appendChild(nameDiv);
                    container.appendChild(capDiv);
             }
        }

}

