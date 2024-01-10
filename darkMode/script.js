//--------------------------------------
// - CodeDrops - darkMode - rocketseat
//--------------------------------------

const html = document.querySelector('html')
const checkbox = document.querySelector('input[name=theme]')


const getStyle = (element, value) => {
    //utiliza o obj window para buscar um elemento e devolver o valor da propriedade
    return window.getComputedStyle(element).getPropertyValue(value)
}

const initialColors = {
   
    bg: getStyle(html, "--bg"),
    bgPainel: getStyle(html, "--bg-painel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
}

const darkMode = {
   
    bg: "#333333",
    bgPainel: "#434343",
    colorHeadings: "#3664ff",
    colorText: "#b5b5b5"
}

const transformKey = (key) => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changeColor = (colors) => {
    //console.log(colors)

    Object.keys(colors).map((key) => {
        html.style.setProperty(transformKey(key), colors[key])
    })
}

checkbox.addEventListener('change', ({target}) => {

    target.checked ? changeColor(darkMode) : changeColor(initialColors)
});
