const outputCVC = document.querySelector("#outputCVC");
const CardHolderOutput = document.querySelector("#CardHolderOutput");
const Card_NumberOutput = document.querySelector("#Card_NumberOutput");
const MonthOutput = document.querySelector("#MonthOutput");
const YearOutput = document.querySelector("#YearOutput");
const btnConfirm = document.querySelector("#btnConfirm");
const Year = document.querySelector("#Year");
const Month = document.querySelector("#Month")
console.log(CVC);



function ActualizarValor(){
    let CVC = document.querySelector("#CVC").value;
    cvc_lengt = CVC.length;
    outputCVC.textContent = CVC;
    if (cvc_lengt > 3) {
       
        CVC = CVC.slice(0,3);
        console.log(CVC)
     }  


    const Cardholder_name = document.querySelector("#Cardholder_name").value;
    CardHolderOutput.textContent = Cardholder_name;

     const Card_Number = document.querySelector("#Card_Number").value;
     Card_NumberOutput.textContent = Card_Number;


     const Month = document.querySelector("#Month").value;
     MonthOutput.textContent = Month;

     const Year = document.querySelector("#Year").value;
     YearOutput.textContent = Year;
}


class TarjetasGuardadas {
    constructor({
        Name,CardNumber,DateM,DateY,cvctar
    })
    {
        this.Name = Name;
        this.CardNumber = CardNumber;
        this.DateM = DateM;
        this.DateY = DateY;
        this.cvctar = cvctar;
    }
}


btnConfirm.addEventListener("click", GuardarTarjeta);


function GuardarTarjeta(event){
    event.preventDefault();
    let Tarjeta1 = new TarjetasGuardadas({
        Name: Cardholder_name.value,
        CardNumber: Card_Number.value,
        DateM: Month.value,
        DateY: Year.value,
        cvctar: CVC.value,
    });
    alert("hola " + Tarjeta1.Name + "con mes" + Tarjeta1.DateM)


}

