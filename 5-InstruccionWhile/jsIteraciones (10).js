function mostrar()
{


	var numnegativos=0;
	var numpositivos=0;
	var cpostivos=0;
	var cnegativos=0;
	var cceros=0;
	var numerospares=0;
	var respuesta='si';
	var numero;
	//var diferencia=numnegativos-numpositivos
	//declarar contadores y variables 

	while (respuesta=="si") {
		numero=parseInt(prompt("ingrese numero"))

		if (numero<0) {
			numnegativos=numnegativos+numero
			cnegativos++}
			
				else if (numero>0){
					numpositivos=numpositivos+numero
					cpostivos++;
					}
							else
								{cceros++;}
		if(numero%2==0)
			{numerospares++;}

		respuesta=prompt("desea seguir?")
	 }
	var diferencia=numnegativos-numpositivos
	
	alert("1_suma de negativos "+numnegativos+
	 "\n2_suma de positivos " +numpositivos+
	 "\n3_cantidad de positivos "+cpostivos+
     "\n4_cantidad de negativos "+cnegativos+
	 "\n5_cantidad de numeros pares "+numerospares+
	 "\n6_cantidad de ceros "+cceros+
     "\n7_promedio de positivos "+(numpositivos/cpostivos)+
     "\n9_promedio de negativos "+(numnegativos/cnegativos)+
     "\n10_diferenciaa entre positivos y negativos "+diferencia)

	 
	 
	 
	

 }


//FIN DE LA FUNCIÓN




//"cantidad de positivos //"+cpostivos+<br></br>+
//"cantidad de negativos //"+cnegativos+<br></br>+
//"cantidad de numeros pares//"+numerospares+<br></br>+
//"promedio de positivos //"+(numpositivos/cpostivos)+<br></br>+
//"promedio de negativos //"+(numnegativos/cnegativos)+<br></br>+
//"diferenciaa entre positivos y negativos"+diferencia);