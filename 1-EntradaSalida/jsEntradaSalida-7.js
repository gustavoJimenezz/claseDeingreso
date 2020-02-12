/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 



function sumar()

{	
    var idUno= document.getElementById("numeroUno").value
    var idDos= document.getElementById("numeroDos").value
    
    idUno= parseInt(idUno)
    idDos= parseInt(idDos)
  
    var sum=idUno+idDos
	alert("la suma es "+ sum)
}

function restar()
{   
    
    var idUno= document.getElementById("numeroUno").value
    var idDos= document.getElementById("numeroDos").value
    
    idUno= parseInt(idUno)
    idDos= parseInt(idDos)
    var res=idUno-idDos
	alert("la resta es "+ res)
	
}

function multiplicar()
{   
    var idUno= document.getElementById("numeroUno").value
    var idDos= document.getElementById("numeroDos").value
    
    idUno= parseInt(idUno)
    idDos= parseInt(idDos)
    var mul=idUno*idDos
	alert("la suma es "+ mul)
	
}

function dividir()
{   
    var idUno= document.getElementById("numeroUno").value
    var idDos= document.getElementById("numeroDos").value
    
    idUno= parseInt(idUno)
    idDos= parseInt(idDos)
    var div=idUno/idDos
	alert("la suma es "+ div)
	
}

