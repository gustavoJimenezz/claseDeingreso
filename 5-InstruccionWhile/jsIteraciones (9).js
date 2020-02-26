function mostrar()
{
	
	var numero=0;
	var contador=0;
	var nummax;
	var nummin;
	var respuesta='si';

	while (respuesta=="si") {
		numero=parseInt(prompt("ingrese numero"))
			
		if (contador==0) {
			nummax=numero
			nummin=numero			
		} else { 
			if (numero>nummax) {
				nummax=numero
				
			} else {
				if(numero<nummin)
				nummin=numero
				
			}
			
			}
		respuesta=prompt("desea continuar?")
		contador++
		
	}

	document.getElementById("maximo").value=nummax
	document.getElementById("minimo").value=nummin




}


