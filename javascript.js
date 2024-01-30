let searchBtn = document.getElementById("search-btn");

let countryInp = document.getElementById("country-input");

//for each occurence of a path element
document.querySelectorAll('path').forEach(occurence => {
    //when that element is clicked
    occurence.addEventListener('click', (e) => {
        //set the input field of countryInp to the clicked element's id
        countryInp.value = e.target.id;
    });
});





document.querySelectorAll(".allPaths").forEach(e =>{
    e.addEventListener("mouseover", function () {
        //on mousover, highlight the path red
        e.style.fill = "red"
    })
    //on mouse leave, return the path to it's original color
    e.addEventListener("mouseleave", function () {
        e.style.fill = "#00394f"
       
    })
})

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalUrl);
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {

            result.innerHTML = `
        <img src="${data[0].flags.svg}"class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
            <div class="data-wrapper">
            <h4>Capital:<h4>
            <span>${data[0].capital[0]}</div>
            </div>
            </div>

              <div class="wrapper">
            <div class="data-wrapper">
            <h4>Continent:<h4>
            <span>${data[0].continents[0]}</div>
            </div>
            </div>

                          <div class="wrapper">
            <div class="data-wrapper">
            <h4>Population:<h4>
            <span>${data[0].population}</div>
            </div>
            </div>

                               <div class="wrapper">
            <div class="data-wrapper">
            <h4>Currency:<h4>
            <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</div>
            </div>
            </div>

                                      <div class="wrapper">
            <div class="data-wrapper">
            <h4>Common Languages:<h4>
            <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</div>
            </div>
            </div>
        
        ` ;
        }).catch(() => {
            if (countryName.length == 0) {
                result.innerHTML = `<h3>The input field cannot be empty.</h3>`
            }
            else {
                result.innerHTML = `<h3>Please enter a valid country.</h3>`
            }
        
        });

});