const billInput = document.querySelector('.bill-input')
const peopleInput = document.querySelector('.people-input')
const tipporpersona = document.getElementById('tip-amount')
const totalporpersona = document.getElementById("total-amount")
const tips = document.querySelectorAll(".tips");
const tipCustom = document.querySelector(".tip-custom")
const resetBtm = document.querySelector(".reset") 
const error = document.querySelector(".error")

billInput.addEventListener("input", billInputfun);
peopleInput.addEventListener("input", peopleInputfun);
tips.forEach(function (val) {
    val.addEventListener("click", handleClick);
})
tipCustom.addEventListener("input", tipInputFun);
resetBtm.addEventListener("click", reset)
billInput.value = '0.0'
peopleInput.value= '1'
tipporpersona.innerHTML = "$" + (0.0).toFixed(2)
totalporpersona.innerHTML = "$" + (0.0).toFixed(2)


let billvalue = 0.0;
let peoplevalue = 1;
let tipvalue = 0.15;

function billInputfun(){
    billvalue = parseFloat(billInput.value)
    calculartip();
    }

   
function peopleInputfun(){
    peoplevalue = parseFloat(peopleInput.value)
    calculartip();

     if(peoplevalue < 1){
        error.style.display = 'flex';
        peopleInput.style.border = 'thick solid red';
     } else{
        error.style.display = 'none';
        peopleInput.style.border = 'none';
        calculartip();
     }
    }

function tipInputFun(){
    tipvalue = parseFloat(tipCustom.value / 100)

   tips.forEach(function(val){
     val.classList.remove("active-tip")
   })
calculartip()
}
function handleClick(event){
    tips.forEach(function(val){
        val.classList.remove("active-tip")
        if(event.target.innerHTML == val.innerHTML){
            val.classList.add("active-tip");
            tipvalue = parseFloat(val.innerHTML)/100
        }
    })
calculartip()
}

function calculartip(){
    if(peoplevalue >=1){
        let tipAmount = (billvalue * tipvalue) / peoplevalue
        let total = (billValue / peopleValue) + tipAmount; 
        tipporpersona.innerHTML = "$" + tipAmount.toFixed(2);
        totalporpersona.innerHTML = "$" + total.toFixed(2);
    }
}

function reset(){
billInput.value = '0.0'
billInputfun()
peopleInput.value= '1'
peopleInputfun()
tipCustom.value = ""
}
