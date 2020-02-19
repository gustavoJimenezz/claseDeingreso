function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

    switch (mesDelAño) {
        case "Febrero":
                        alert("mes de 28 días")
        break;
        case "Enero":
        case "Marzo":
        case "Mayo":
        case "Julio":
        case "Agosto":
        case "Octubre":
        case "Diciembre":
                         alert("mes de 31 días")   
                         break;
           
        default:
                alert("mes de 30 días")
                break;
    }

	          

	
}//FIN DE LA FUNCIÓN