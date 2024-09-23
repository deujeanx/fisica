document.getElementById(btnDina1)
document.getElementById(btnDina2)

btnDina1.addEventListener("click", function() {
    var masa = parseFloat(prompt ("Ingrese la masa del objeto"))
    var aceleracion = parseFloat(prompt ("Ingrese la aceleración del objeto"))
    var fuerza = masa*aceleracion

    alert("La fuerza generada por la masa "+masa+ " y la aceleración "+aceleracion+ " es de "+fuerza+" newtons")
})

btnDina2.addEventListener("click", function() {
    var masa = parseFloat(prompt("Ingrese la masa del objeto"))
    var peso = masa*9.18

    alert("El peso del objeto de masa "+masa+ " y gravedad de 9.18 es "+peso+" kilos")
})