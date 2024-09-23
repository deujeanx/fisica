document.getElementById(btn9)
document.getElementById(btn10)
document.getElementById(btn11)

btn9.addEventListener("click", function() {

    var velocidadInicial = parseFloat(prompt("Ingrese La velocidad Inicial"))
    var aceleracion = parseFloat(prompt ("Ingrese la aceleracion"))
    var tiempo = parseFloat(prompt("Ingrese el tiempo"))
    var velocidadFinal = velocidadInicial + aceleracion*tiempo

    alert ("La velocidad final es " + velocidadFinal)

})

btn10.addEventListener("click", function() {

    var posicion_i = parseFloat(prompt("Ingrese La posicion inicial"))
    var velocidad_i = parseFloat(prompt ("Ingrese la velocidad inical"))
    var velocidad_f = parseFloat(prompt ("Ingrese la velocidad final"))
    var tiempo = parseFloat(prompt("Ingrese el tiempo"))
    var distanciaFinal = posicion_i+(1/2)*(velocidad_i+velocidad_f)*tiempo
    alert ("La distiancia es " + distanciaFinal)

})


btn11.addEventListener("click", function() {

    var posicion_i = parseFloat(prompt("Ingrese La posicion inicial"))
    var velocidad_i = parseFloat(prompt ("Ingrese la velocidad inical"))
    var tiempo = parseFLoat(prompt("Ingrese el tiempo"))
    var aceleracion = parseFloat(prompt("Ingrese la aceleracion"))
    var distancia_final = posicion_i + velocidad_i * tiempo + 1/2 * aceleracion * (tiempo*tiempo);

    alert ("La distancia final es " + distancia_final)

})