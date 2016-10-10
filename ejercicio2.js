
/*Inicio
For (contador en 0, hasta contador menor a 2, incrementa 1 en cada vuelta el contador)
Pide un nombre
Lee name
asigna el valor de name al  campo del arreglo que corresponde a i
escribre los elementos del arreglo
Fin
*/
var nombres= [];
for (var i = 0; i <= 2; i++) 
	{
	var name = prompt('Dame un nombre');
	/*nombres[i]=name
	document.write("Nombre " + (i+1) +": " + nombres[i] + " ");*/ 
	nombres.push(name);
	}
document.write("Primer nombre: " + (nombres[0]) + " Segundo nombre: " + (nombres[1]) + " Tercer nombre: " + (nombres[2]))
