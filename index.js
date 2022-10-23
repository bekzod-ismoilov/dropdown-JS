const wrapper = document.querySelector(".wrapper");
selectBtn = wrapper.querySelector(".select-btn");
options = wrapper.querySelector(".options");
searchInput = wrapper.querySelector("input");

let countries = ["Azerbaijan", "Afghanistan", "Kyrgyzstan", "Kazakhstan", "Uzbekistan",
    "Turkmenistan", "Turkey", "Mongolia"]

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");

})

function addCountry() {
    countries.forEach(country => {
        let li = `<li onclick="clickName(this)"">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li)
    })
}

addCountry();


function clickName(selectedLi) {
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerHTML = selectedLi.innerHTML
}

searchInput.addEventListener("keyup", () => {
    let array = [];
    let searchValue = searchInput.value.toLowerCase();
    array = countries.filter(data => {
        return data.toLowerCase().startsWith(searchValue)
    }).map(data => `<li onclick=clickName(this)>${data}</li>`).join("");
    options.innerHTML = array;
    options.innerHTML = array ? array : `<p>Country not found</p>`;
})