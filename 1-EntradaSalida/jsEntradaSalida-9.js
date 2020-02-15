/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var idsueldo= document.getElementById("sueldo").value
    var idsueldo=parseInt(idsueldo)
   // var resultado= idsueldo*10
   // var resultadodos=resultado/100
    //var total=idsueldo+resultadodos
   //document.getElementById("resultado").value=total
   idsueldo=idsueldo*0.1+idsueldo
    //var resultadodos=idsueldo+resultado
    document.getElementById("resultado").value=idsueldo//resultadodos
    
}
