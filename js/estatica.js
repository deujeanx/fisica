document.getElementById(btnEsta1)
document.getElementById(btnEsta2)


btnEsta1.addEventListener("click", function() {
    var fuerza1 = parseFloat(prompt ("Ingrese la primera fuerza"))
    var fuerza2 = parseFloat(prompt ("Ingrese la segunda fuerza"))
    var masa = parseFloat(prompt ("Ingrese la masa del objeto"))
    var aceleracion = (fuerza1+fuerza2)/masa

    alert("La aceleración generada por el objeto de masa "+masa+ " y afectado por la fuerza 1 "+fuerza1+ " y fuerza 2 "+fuerza2+" es de "+aceleracion)
})
btnEsta2.addEventListener("click", function() {
    var acele_X = parseFloat(prompt ("Ingrese la aceleración en x"))
    var acele_Y = parseFloat(prompt ("Ingrese la aceleración en y"))
    var aceleracion = Math.sqrt((acele_X*acele_X)+(acele_Y*acele_Y))

    alert("La aceleración de la magnitudes de aceleración en X y Y es "+aceleracion)
})