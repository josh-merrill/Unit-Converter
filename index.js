const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const resetBtn = document.getElementById("reset-btn")
const toggleThemeBtn = document.getElementById("toggleThemeBtn")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

toggleThemeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark")
})

function convertUnits(baseValue) {
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
    
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`
    
    massEl.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos`    
    
    inputEl.value = ""   
}

convertBtn.addEventListener("click", function() {
    baseValue = inputEl.value
    convertUnits(baseValue)
})

resetBtn.addEventListener("click", function() {
    baseValue = 0
    convertUnits(baseValue)
})
