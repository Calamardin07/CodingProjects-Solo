const currenciesFont = {
    Dollar: "dollar-coin",
    Yen: "yen-coin",
    Won: "won-coin",
    Tenge: "tenge-coin",
    Sterling: "sterling-coin",
    Shekel: "shekel-coin",
    Rupiah: "rupiah-coin",
    Ruble: "ruble-coin",
    Peso: "peso-coin",
    Peseta: "peseta-coin",
    Naira: "naira-coin",
    Mill: "mill-coin",
    Manat: "manat-coin",
    Litecoin: "litecoin-coin",
    Lira: "lira-coin",
    Lari: "lari-coin",
    Kip: "kip-coin",
    Hryvnia: "hryvnia-coin",
    Guarani: "guarani-coin",
    Franc: "franc-coin",
    Florin: "florin-coin",
    Euro: "euro-coin",
    Dong: "dong-coin",
    Cruzeiro: "cruzeiro-coin",
    Colon: "colon-coin"
  };

async function getRate() {
    const response = await fetch("https://api.currencyapi.com/v3/latest?apikey=cur_live_hTp1NrWxrs4HYIfYQfJGyKsI4S55mutGx4l2dEHc");
    const currencyRate = await response.json();
    return currencyRate.data
}

(async() => {
    let rates = await getRate()
    console.log(rates)
})()

