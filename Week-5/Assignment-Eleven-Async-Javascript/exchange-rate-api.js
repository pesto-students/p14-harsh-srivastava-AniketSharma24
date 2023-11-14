const API_KEY = "YOUR_API_KEY";
const API_URL = "https://api.apilayer.com/exchangerates_data/latest";

const myHeaders = new Headers();
myHeaders.append("apikey", API_KEY);

const requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};

async function getExchangeRate(currencyCode) {
  const response = await fetch(
    `${API_URL}?symbols=${currencyCode}&base=${currencyCode}`,
    requestOptions
  );
  const json = await response.json();

  return json["rates"] ? json["rates"][currencyCode].toFixed(4) : null;
}

getExchangeRate("USD")
  .then((rate) => {
    console.log(rate);
  })
  .catch((error) => {
    console.error(error);
  });
