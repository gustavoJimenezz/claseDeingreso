function mostrar()
{
//tomo la edad  
var edad=document.getElementById("edad").value
    if (edad>17) {
        alert("mayor de edad")
        
    } else {
        if (edad<13) {
            alert("niño")
            
        } else {
            alert("adolescente")
            
        }
    }



}//FIN DE LA FUNCIÓN