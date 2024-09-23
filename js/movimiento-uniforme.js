document.getElementById(btn5)
document.getElementById(btn6)
document.getElementById(btn7)
document.getElementById(btn8)

btn5.addEventListener("click", function() {

    var distancia = parseFloat(prompt ("Ingrese la distancia que recorrio "))
    var tiempo = parseFloat(prompt ("Ingrese el tiempo en el que recorrio esa distancia"))

    var velocidad = distancia/tiempo

    alert ("La velocidad es " + velocidad)

})

btn6.addEventListener("click", function() {

    var distancia = parseFloat(prompt("Ingrese la distancia que recorrio"))
    var velocidad = parseFloat(prompt("Ingrese la velocidad a la que recorrio esa distancia"))
    var tiempo = distancia/velocidad

    alert ("El tiempo es de " + tiempo)

})

btn7.addEventListener("click", function() {

    var velocidad = parseFloat(prompt("Ingrese la velocidad"))
    var tiempo = parseFloat(prompt("Ingrese el tiempo"))
    var distancia = velocidad*tiempo

    alert ("La distancia que recorrio es " + distancia)

})

btn8.addEventListener("click", function() {

    var distanciaInicial = parseFloat(prompt("Ingrese la distancia inicial"))
    var distanciaFinal = parseFloat(prompt("Ingrese la distancia final"))
    var tiempo = parseFloat(prompt("Ingrese el tiempo"))
    var rapidez = (distanciaFinal-distanciaInicial)/tiempo

    alert ("La rapidez es " + rapidez)

})
