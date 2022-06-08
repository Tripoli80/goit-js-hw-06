const refInputSizeText = document.querySelector("#font-size-control");
const refTextDescription = document.querySelector("#text");

refInputSizeText.addEventListener("input", changeText);

function changeText() {   
    refTextDescription.style.fontSize =this.value+"px"
} 
