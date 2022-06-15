//*=========================================================
//*                     FLAG-APP
//*=========================================================

const fetchCountry = async (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      renderError(`Something went wrong: ${res.status}`);
      throw new Error();
    }
    const data = await res.json();
    console.log(data[0]);
    renderCountry(data[0]);
  } catch (error) {}
};

const renderError = (err) => {
  const countriesDiv = document.querySelector(".countries");
  countriesDiv.innerHTML = `<h1 class= "text-danger">${err}</h1> <img src="./404.png" alt=""/>`;
};

const renderCountry = (country) => {
  console.log(country);
};

fetchCountry("turkey");
fetchCountry("usa");
fetchCountry("france");
