let amountPerPerson = document.getElementById("amount-per-person")
let tipPercentArr = document.querySelectorAll("#tip-percent")
let resetBtn = document.getElementById("reset-btn")

function getValue(){
let bill = document.querySelector("#bill").value
let noOfPeople = document.querySelector("#people").value
let amountDue = bill / noOfPeople

amountDue = Math.round(amountDue * 100)/100

amountPerPerson.textContent = `$${amountDue}`

resetBtn.removeAttribute("disabled")

if(bill != "" && noOfPeople != ""){
resetBtn.classList.add("active")
} else{
    resetBtn.classList.remove("active")
}

if(bill === "" || noOfPeople === ""){
    amountPerPerson.textContent = "$0.00"
}

document.getElementById("custom-tip").onkeyup = () =>{
    let tipPrice = document.getElementById("tip-amount")
       let tipPercent = document.getElementById("custom-tip").value
       let tipAmount = (tipPercent / 100) * amountDue
       tipAmount = Math.round(tipAmount * 100)/100

        tipPrice.textContent = `$${tipAmount}`

}

for(let i = 0 ; i < tipPercentArr.length; i++){
    let tipPercent = tipPercentArr[i].getAttribute("data-number")

    tipPercentArr[i].addEventListener("click", () =>{
        let tipPrice = document.getElementById("tip-amount")
        let bill = document.querySelector("#bill").value
        let noOfPeople = document.querySelector("#people").value
        let amountDue = bill / noOfPeople  
        amountDue = Math.round(amountDue * 100)/100

       let tipAmount = (tipPercent / 100) * amountDue
       tipAmount = Math.round(tipAmount * 100)/100

        tipPrice.textContent = `$${tipAmount}`
    })
}

}

resetBtn.addEventListener("click", () =>{
    window.location.reload()
})