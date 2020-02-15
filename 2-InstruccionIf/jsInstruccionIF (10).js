function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var ramdom=Math.floor(Math.random() * 10) + 1;	
	
	if (ramdom<4) {
		alert("vamos,la proxima se puede")
		
	} else {
		if (ramdom>8) {
			alert("EXELENTE")
			
		} else {
			alert("APROBO")
			
		}
		
	}


}//FIN DE LA FUNCIÓN