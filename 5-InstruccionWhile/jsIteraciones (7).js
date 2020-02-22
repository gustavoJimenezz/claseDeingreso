function mostrar()
{
		
	
	
	var contador=0
	var acumulador=0;
	var calculo;
	var respuesta="si";
	
	while (respuesta=="si") 
	{	
		

		calculo=parseInt(prompt("ingrese valor"))
		//calculo=parseInt(calculo)
		acumulador=acumulador+calculo;
	    contador++;
		
		respuesta=prompt("desea continuar")
		
		
	}
		
		


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN