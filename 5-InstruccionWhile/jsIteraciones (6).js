function mostrar()
{
		
	
	
	var contador=0;
	var calculo;
	var acumulador=0;
	
	//contador=prompt("colocar un numero")

	while (contador<5) 
	{
		calculo=prompt("ingrese valor")
		calculo=parseInt(calculo)
		acumulador=acumulador+calculo;
	    contador++;

		
	}
		
	


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN