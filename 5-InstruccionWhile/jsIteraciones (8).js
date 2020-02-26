function mostrar()
{
	var positivo=0;
	var negativo=0;	
	//var contador=0
	//var acumulador=0;
	var calculo;
	var respuesta="si";
	
	while (respuesta=="si") 
	{	
		

		calculo=parseInt(prompt("ingrese valor"))
		if (calculo<0) {
			negativo=negativo+calculo
		} else {
			positivo=positivo+calculo
		}
		//acumulador=acumulador+calculo;
	    //contador++;
		
		respuesta=prompt("desea continuar")
		
		
	}
		


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN-