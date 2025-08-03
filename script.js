
let colorPickerContainerEl = document.getElementById("colorPickerContainer");
let selectedColorHexCodeEl = document.getElementById("selectedColorHexCode")



function btnOneClick(){
    colorPickerContainerEl.style.backgroundColor = "#e0e0e0";
    selectedColorHexCodeEl.textContent = "#e0e0e0";
}

function btnTwoClick(){
    colorPickerContainerEl.style.backgroundColor = "#6fcf97";
    selectedColorHexCodeEl.textContent = "#6fcf97";
}

function btnThreeClick(){
    colorPickerContainerEl.style.backgroundColor = "#56ccf2";
    selectedColorHexCodeEl.textContent = "#56ccf2";
}

function btnFourClick(){
    colorPickerContainerEl.style.backgroundColor = "#bb6bd9";
    selectedColorHexCodeEl.textContent = "#bb6bd9";

}

