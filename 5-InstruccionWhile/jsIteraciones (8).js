function mostrar()
{
	var positivo=0;
	var negativo=1;	

	var numeros;
	var respuesta="si";
	
	
	while (respuesta=="si") 
	{numeros=parseInt(prompt("ingrese valor"))
	while (isNaN(numeros)) {
		numeros=parseInt(prompt("Error: ingrese numeros"))
		
	}
		if (numeros<0) {
			negativo=negativos*numeros
			
		  } else {
			  positivo=numeros
		  	 positivo=positivo+numeros
		  }
		//acumulador=acumulador+numeros;
	    //contador++;
		
		respuesta=prompt("desea continuar")
		
		
	}
		


document.getElementById('suma').value=negativo;
document.getElementById('producto').value=positivo;

}//FIN DE LA FUNCIÓN-