fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayData(data))

const displayData = data => {
    for (let i = 0; i < data.length; i++) {
        const CountriesDiv = document.getElementById('displayData');
        const country = data[i];
        const countryDiv = document.createElement("div");
        countryDiv.className = 'countryDivStyle'

        //first way

        // const name = document.createElement("h3");
        // name.innerText = country.name;
        // const capital = document.createElement("p");
        // capital.innerText = country.capital;
        // countryDiv.appendChild(name);
        // countryDiv.appendChild(capital);
        // CountriesDiv.appendChild(countryDiv);

        const countryInfo = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="displayCountryDetails('${country.name}')">Details</button>
           
        `
       
        countryDiv.innerHTML = countryInfo;
        CountriesDiv.appendChild(countryDiv);
        

    }

}
const displayCountryDetails = countrydetailsInfo => {
    const Url = `https://restcountries.eu/rest/v2/name/${countrydetailsInfo}`
    fetch(Url)
        .then(res => res.json())
        .then(data => countryInfo(data[0]));
}

const countryInfo = countriesInfo => {
    console.log(countriesInfo);
    const countryDiv = document.getElementById('countryDetailsInfo');
    countryDiv.innerHTML = `
    <h3>Name: ${countriesInfo.name}</h3>
    <p> Capital: ${countriesInfo.capital}</p>
    <p>Area: ${countriesInfo.area}</p>
    <p>Area: ${countriesInfo.timezones}</p>
    <img src="${countriesInfo.flag}">
   
    `
    alert("Thank you for clicked and show country details");
}
