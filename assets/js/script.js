function convertDegrees() {
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
        let convertedDegree

        if (degree.includes('c') || degree.includes('C')) {
            celsius = degree.toUpperCase()
            convertedDegree = convertToFahrenheit(celsius)

        } else if (degree.includes('f') || degree.includes('F')) {
            fahrenheit = degree.toUpperCase()
            convertedDegree = convertToCelsius(fahrenheit)

        } else if (degree === "") {
             warn.innerHTML = `Temperature field cannot be empty`
            return

        } else {
            warn.innerHTML = `Invalid temperature. Try again in correct format`
            return
        }

        return result.innerHTML = convertedDegree
    }

    function convertToFahrenheit(temp) {
        let temperature = Number(temp.replace("C", ""))
        let toCelsius = temperature * 9 / 5 + 32
        return `${toCelsius.toFixed(2)}ºF`
    }

    function convertToCelsius(temp) {
        let temperature = Number(temp.replace("F", ""))
        let toFahrenheit =(temperature - 32) * 5 / 9
        return `${toFahrenheit.toFixed(2)}ºC`
    }

}

convertDegrees()