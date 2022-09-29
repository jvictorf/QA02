function dolarParaReais(valor) {
    return valor * 5.38;
}

module.exports = {dolarParaReais}

function fahrenheit(celcius) {
    return (celcius * 1.8) + 32;
}

module.exports = {fahrenheit}

function nummaior(num1, num2, num3) {

    var xd =""

    if (num1 > num2 && num1 > num3) {
        xd = "Número um é o maior"
     } else  if (num2 > num1 && num2 > num3) {
        xd = "Número dois é o maior"
     } else if (num3 > num1 && num3 > num2) {
        xd = "Número três é o maior"
    }
    return xd
}

module.exports = {nummaior}