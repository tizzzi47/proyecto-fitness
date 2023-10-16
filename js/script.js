





function clickbtncalcular() {

    var txtpeso = document.getElementById("txtpeso");
    var peso = txtpeso.value;

    var txtaltura = document.getElementById("txtaltura");
    var altura = txtaltura.value;

    var imc = peso / (altura * altura);

    var labelimc = document.getElementById("tuimc")
    btncalcular.remove()
    var resultadoimc = document.createElement("h5")
    resultadoimc.innerHTML = "Tu IMC es " + imc.toFixed(2)
        labelimc.appendChild(resultadoimc)
}

var btncalcular = document.getElementById("btncalcular");
btncalcular.addEventListener("click", clickbtncalcular);

