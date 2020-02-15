/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var idUno= document.getElementById("numeroUno").value
    var idDos= document.getElementById("numeroDos").value

    idUno= parseInt(idUno)
    idDos= parseInt(idDos)
     
    //var resultado= idUno+idDos
    
    alert("la suma es " + (idUno+idDos))
}

