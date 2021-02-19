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
                    const img = document.getElementById('flag');
                    const cname = document.getElementById('cname');
                    const ccapital = document.getElementById('ccapital');
                    const cregion = document.getElementById('cregion');
                    const csubregion = document.getElementById('csubregion');
                    const cpopulation = document.getElementById('cpopulation');
                   
                    img.src = data[i].flag;
                    cname.innerHTML = 'Country: ' + data[i].name;
                    ccapital.innerHTML = 'Capital: ' + data[i].capital;
                    cregion.innerHTML = 'Region: ' + data[i].region;
                    csubregion.innerHTML = 'Subregion: ' + data[i].subregion;
                    cpopulation.innerHTML = 'Population: ' + data[i].population;
            
             }
        }

}

