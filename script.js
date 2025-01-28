const convertButton = document.querySelector("#button") //chamar do html
const currencySelect = document.querySelector("#currency-select")
// console.log(nome da função) // testar edição
function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value //Pegar o valor que está dentro do input
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value") //Outras Moedas

    const dolarToday = 5.2 //Valor do dolar
    const euroToday = 6.2
    const libratoday = 7.4
    const bitcointoday = 600.000

    const convertedValue = inputCurrencyValue / dolarToday //Dividir o valor do input pelo dolar

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue) //Pegar o resultado da conversão e mostrar no valor convertido quando clicar no botão
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday) //Mesmo que a linha 13 e 19
    }

    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libratoday) //Mesmo que a linha 13 e 19
    }

    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcointoday) //Mesmo que a linha 13 e 19
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue) //Pegar o texto do input e mostrar no valor a converter quando clicar no botão. pesquisa o site intl.numberformat
}

function changecurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyimage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyimage.src = "./assets/EUA.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyimage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyimage.src = "./assets/Libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyimage.src = "./assets/Bitcoin.png"
    }

convertValues()
}

currencySelect.addEventListener("change", changecurrency)
convertButton.addEventListener("click", convertValues) //ouvinte de eventos CAGUETEEEEEE