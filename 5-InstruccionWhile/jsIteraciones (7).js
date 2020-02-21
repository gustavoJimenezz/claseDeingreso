function mostrar()
{
		
	
	
	var contador=0;
	var calculo;
	var acumulador=0;
	//var respuesta="si"

	while (contador!=NaN) 
	{
		
		contador=prompt("ingrese valor, ingrese SI para salir");
		//contador=parseInt(contador);
		acumulador=acumulador+contador;
		//contador++;

		
	}
		


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN