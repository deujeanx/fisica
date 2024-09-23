document.getElementById(btn1)
document.getElementById(btn2)
document.getElementById(btn3)
document.getElementById(btn4)

btn1.addEventListener("click", function() {

    var km = parseFloat(prompt("Ingrese los kilometros que desea convertir"))
    var m = km*1000

    alert (km + " Kilometros son " + m + " Metros")

})

btn2.addEventListener("click", function() {

    var m = parseFloat(prompt("Ingrese los metros que desea convertir a kilometros"))
    var km = m*0.001

    alert (m + " metros son " + km + " kilometros")

})

btn3.addEventListener("click", function(){

    var m = parseFloat(prompt("Ingrese los metros que desea convertir a centimetros"))
    var cm = m*100

    alert (m + " metros son " + cm + " centimetros" )

})

btn4.addEventListener("click", function() {

    var cm = parseFloat(prompt("Ingrese los centimetros que desea convertir a metros"))
    var m = cm*0.01
    alert (cm + " centimetros son " + m + " metros")

})

