const outputCVC = document.querySelector("#outputCVC");
console.log(CVC)

function ActualizarValor(){
    const CVC = document.querySelector("#CVC").value;
    outputCVC.textContent = CVC;
}