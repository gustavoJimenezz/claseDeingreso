function mostrar()
{
    var mesDelAño = document.getElementById('mes').value;
//tomo la edad  
switch (mesDelAño) {
    case "Julio":
    case "Agosto":
    case "Septiembre":
                        alert( "Abrigate que hace frio.");
        break;
        case "Diciembre":
        case "Enero":
        case "Febrero":
        case "Marzo":
                        alert( "Ya pasamos el frio, ahora calor!!!."  );
        break;
        case "Abril":
        case "Mayo":
        case "Junio":
                        alert( "Falta para el invierno.");
        break;
}




}//FIN DE LA FUNCIÓN