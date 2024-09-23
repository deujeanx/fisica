document.getElementById(btn12)
document.getElementById(btn13)

btn12.addEventListener("click", function() {

    var velocidadInicial = parseFloat(prompt("Ingrese La velocidad Inicial"))
    var tiempo = parseFloat(prompt("Ingrese el tiempo"))
    var velocidadFinal = velocidadInicial + 9.8 * tiempo

    alert ("La velocidad final es " + velocidadFinal)

})

btn13.addEventListener("click", function() {

    var altura = parseFloat(prompt("Ingrese La altura"))
    var tiempo_caida= Math.sqrt(2*altura/9.8)

    alert ("el tiempo de caida es " + tiempo_caida)

})

