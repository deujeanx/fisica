document.getElementById(btnvec_1)
document.getElementById(btnvec_2)
document.getElementById(btnvec_3)
document.getElementById(btnvec_4)

btnvec_1.addEventListener("click", function() {

    var posicion_x1 = parseFloat(prompt("Ingrese posicion x1"))
    var posicion_x2 = parseFloat(prompt("Ingrese posicion x2"))
    var posicion_y1 = parseFloat(prompt("Ingrese posicion y1"))
    var posicion_y2 = parseFloat(prompt("Ingrese posicion y2"))
    var suma_vectores = (posicion_x1+posicion_x2 * posicion_y1+posicion_y2)

    alert ("La suma de vectores es " + suma_vectores)

})

btnvec_2.addEventListener("click", function() {

    var co = parseFloat(prompt("Ingrese el cateto opuesto"))
    var altura = parseFloat(prompt("Ingrese la altura"))
    var calcular_seno = Co/altura

    alert ("El seno  es " + calcular_seno)

})

btnvec_3.addEventListener("click", function() {

    var ca = parseFloat(prompt("Ingrese el cateto adyacente"))
    var altura = parseFloat(prompt("Ingrese la altura"))
    var calcular_cos = Ca/altura

    alert ("El coseno  es " + calcular_cos)

})

btnvec_4.addEventListener("click", function() {

    var co = parseFloat(prompt("Ingrese el cateto opuesto"))
    var ca = parseFloat(prompt("Ingrese el cateto adyacente"))
    var calcular_tangente = Co/ca

    alert ("La tangente  es " + calcular_tangente)

})


