function mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;
//laHora=laHora>=7 && laHora<=11
 switch (laHora) {
       case "7":
       case "8":
       case "9":
       case "10":
       case "11":
         alert ("Es de mañana.")
          break;
 
     default:
         break;
 }
//alert (laHora);
	
	



}//FIN DE LA FUNCIÓN