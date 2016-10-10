/*EJERCICIO 3
Definir una función que determine si la cadena de texto que se le pasa como
 parámetro es un palíndromo, es decir, si se lee de la misma forma desde la 
 izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos 
 aporto otro paso natural". */

 var palabra=prompt('Dame una palabra para saber si es palíndromo');
 var j = palabra.length-1
 var k=0;

/*no recorde como quitar los espacios vacios en una cadena asi que solo funciona 
para PALABRAS o escribiendo sin espacios en el prompt*/

 for (var i=0; i<j; i++)
 {
 	 var fin=(palabra[j])
	 var ini=(palabra[k])

 	if (fin !== ini)
 		{
 		var palindromo=0;
 		}
 		
 	j=j-1;
 	k=k+1;
 }

if(palindromo!==0){
	document.write('Si es');
}
else{
	document.write('No es')
}


