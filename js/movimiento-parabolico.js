document.getElementById(btnparabo1)
document.getElementById(btnparabo2)
document.getElementById(btnparabo3)
document.getElementById(btnparabo4)

btnparabo1.addEventListener("click", function() {

    var velocidad_i = parseFloat(prompt ("Ingrese la velocidad inicial"))
    var catetoa = parseFloat(prompt ("Ingrese el cateto adyacente"))
    var hipotenu = parseFloat(prompt ("Ingrese la hipotenusa"))
    var velocidadh = catetoa / hipotenu * velocidad_i

    alert("La velocidad horizontal de la "+velocidad_i+ " y el cateto adyacente "+catetoa+ " es "+velocidadh)
})

btnparabo2.addEventListener("click", function() {

    var velocidad_i = parseFloat(prompt("Ingrese la velocidad inicial"))
    var catetoo = parseFloat(prompt ("Ingrese el cateto opuesto"))
    var hipotenu = parseFloat(prompt("Ingrese la hipotenusa"))
    var velocidadv = catetoo / hipotenu * velocidad_i

    alert("La velocidad vertical de la "+velocidad_i+ " y el cateto opuesto "+catetoo+ " es "+velocidadv)
})

btnparabo3.addEventListener("click", function() {

    var velocidad_i = parseFloat(prompt ("Ingrese la velocidad inicial"))
    var catetoo = parseFloat(prompt("Ingrese el cateto opuesto"))
    var hipotenu = parseFloat(prompt("Ingrese la hipotenusa"))
    var distancia = ((velocidad_i*velocidad_i)*((catetoo/hipotenu)*2))/(9.8*2)

    alert("La distancia de la "+velocidad_i+ " y el cateto opuesto "+catetoo+ " es "+distancia)
})

btnparabo4.addEventListener("click", function() {

    var velocidad_i = parseFloat(prompt("Ingrese la velocidad inicial"))
    var catetoo = parseFloat(prompt("Ingrese el cateto opuesto"))
    var hipotenu = parseFloat(prompt("Ingrese la hipotenusa"))
    var alturamax = (catetoo/hipotenu*velocidad_i)*(catetoo/hipotenu*velocidad_i)/(9.8)

    alert("La altura maxima de la "+velocidad_i+ " y el cateto opuesto "+catetoo+ " es "+alturamax)
})

