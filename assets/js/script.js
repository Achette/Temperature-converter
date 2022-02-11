(function convertDegrees() {
    let degree = document.querySelector('#input1')
    let result = document.querySelector('.result')
    const warn = document.querySelector('.warn')
    const convert = document.querySelector('.container')

    convert.addEventListener('click', e => {
        const element = e.target

        if (element.classList.contains('convert')) {
            warn.innerHTML = ""
            transformDegree(degree.value)
        }
    })

    degree.addEventListener('keypress', e => {
        if (e.keyCode === 13) {
            warn.innerHTML = ""
            transformDegree(degree.value)
        }
    })

    function transformDegree(degree) {
        let celsius
        let fahrenheit
        let kelvin
        let convertedDegree

        if (degree.includes('c') || degree.includes('C')) {
            celsius = degree.toUpperCase()
            convertedDegree = fahrenheitKelvin(celsius)

        } else if (degree.includes('f') || degree.includes('F')) {
            fahrenheit = degree.toUpperCase()
            convertedDegree = celsiusKelvin(fahrenheit)

        } else if (degree.includes('k') || degree.includes('K')) {
            kelvin = degree.toUpperCase()
            convertedDegree = celsiusFahrenheit(kelvin)

        } else if (degree === "") {
            warn.innerHTML = `"Temperature" field cannot be empty`
            return

        } else {
            warn.innerHTML = `Invalid temperature. Try again in correct format`
            return
        }

        return result.innerHTML = convertedDegree
    }

    function fahrenheitKelvin(temp) {
        let temperature = Number(temp.replace("C", ""))
        let toFahrenheit = temperature * 9 / 5 + 32
        let toCelsius = (toFahrenheit - 32) * 5 / 9
        let toKelvin = toCelsius + 273.15
        return `${toFahrenheit.toFixed(2)} ºF
            <br>  ${toKelvin.toFixed(2)} k`
    }

    function celsiusKelvin(temp) {
        let temperature = Number(temp.replace("F", ""))
        let toCelsius = (temperature - 32) * 5 / 9
        let toKelvin = toCelsius + 273.15
        return `${toCelsius.toFixed(2)} ºC
        <br>  ${toKelvin.toFixed(2)} k`
    }

    function celsiusFahrenheit(temp) {
        let temperature = Number(temp.replace("K", ""))
        let toCelsius = temperature - 273.15
        let toFahrenheit = toCelsius * 9 / 5 + 32
        return `${toCelsius.toFixed(2)} ºC
        <br> ${toFahrenheit.toFixed(2)} ºF`
    }

})()