const fromAmountElement =document.querySelector('.amount');
const convertedAmountElement = document.querySelector('.convertedAmount');
const fromCurrencyElement = document.querySelector('.fromCurrency');
const toCurrencyElement = document.querySelector('.toCurrency');
const resultElement = document.querySelector('.result');

const countries = [ {code : "USD" , name: "United State Dollar"}, {code : "INR" , name: "Indian Rupee"},
];

countries.forEach(country =>{
    const option1  = document.createElement('option');
    const option2  = document.createElement('option');

    option1.value = option2.value = country.code;
    option1.textContent = option2.textContent = `${country.code} (${country.name})`;

    fromCurrencyElement.appendChild(option1);
    fromCurrencyElement.appendChild(option2);

    fromCurrencyElement.value = "USD";
    toCurrencyElement.value = "INR";

   
 
})

const getExchangeRate = () =>{
    const amount = parseFloat(fromAmountElement.value);
    const fromCurrency = fromCurrencyElement.value;
    const toCurrency = toCurrencyElement.value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    const data = await response.json();
    const conversionRate = data.rates[toCurrency];
    const convertedAmount = {amount * conversionRate};

    convertedAmountElement.value = convertedAmount;
}
 fromAmountElement.addEventListener('input',getExchangeRate);