const baseUrl = 'https://restcountries.eu/rest/v2/name/';


function callCountries(){
    let country = document.getElementById('countryName').value;
    fetch(baseUrl + country)
        .then(response => response.json())
        .then(data => {
            appendData(data);
        })
        function appendData(data){
            let container = document.getElementById('displayData');
                for (let i = 0; i < data.length; i++) {
                    let div = document.createElement("div");
                    div.innerHTML = 'name: ' + data[i].name /*+ ' ' + 'capital: ' + data[i].capital*/;
                    container.appendChild(div);
                }
        }

}

