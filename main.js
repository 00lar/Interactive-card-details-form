const outputCVC = document.querySelector("#outputCVC");
const CardHolderOutput = document.querySelector("#CardHolderOutput");
const Card_NumberOutput = document.querySelector("#Card_NumberOutput");
const MonthOutput = document.querySelector("#MonthOutput");
const YearOutput = document.querySelector("#YearOutput");
console.log(CVC);

function ActualizarValor(){
    const CVC = document.querySelector("#CVC").value;
    outputCVC.textContent = CVC;

    const Cardholder_name = document.querySelector("#Cardholder_name").value;
    CardHolderOutput.textContent = Cardholder_name;

     const Card_Number = document.querySelector("#Card_Number").value;
     Card_NumberOutput.textContent = Card_Number;

     const Month = document.querySelector("#Month").value;
     MonthOutput.textContent = Month;

     const Year = document.querySelector("#Year").value;
     YearOutput.textContent = Year;
}