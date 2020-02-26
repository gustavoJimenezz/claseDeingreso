function mostrar()
{
		
	
	
	var contador=0
	var acumulador=0;
	var calculo;
	var respuesta="si";
	
	while (respuesta=="si") 
	{	
		

		calculo=parseInt(prompt("ingrese valor"))
		acumulador=acumulador+calculo;
	    contador++;
		
		respuesta=prompt("desea continuar")
		
		
	}
		
		


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN