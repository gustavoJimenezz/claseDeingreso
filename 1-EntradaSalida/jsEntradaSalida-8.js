/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var idUno= document.getElementById("numeroDividendo").value
    var idDos= document.getElementById("numeroDivisor").value
    
    idUno= parseInt(idUno)
    idDos= parseInt(idDos)
    var numresto= idUno%idDos
     

    alert("el resto es "+ numresto)
    

	
}
