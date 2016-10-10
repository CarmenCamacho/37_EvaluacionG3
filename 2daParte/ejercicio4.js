/*EJERCICIO 4
Definir la siguiente jerarquía de objetos, haciendo uso de los prototipos de JavaScript:
Objeto Persona con las propiedades nombre, edad y género, y el método obtDetalles(),
 que muestra por pantalla las propiedades de la persona.
Objeto Estudiante, que hereda de Persona, e incluye las propiedades curso y grupo y el método registrar().
Objeto Profesor, que hereda de Persona, e incluye las propiedades asignatura y nivel y el método asignar().
Crear los objetos y casos de prueba necesarios para comprobar el correcto funcionamiento de la jerarquía.*/


var persona={
	nombre:'Carmen',
	edad:29,
	genero:'Femenino',
}

function obtDetalles(alguien){
	document.write(alguien.nombre);
	document.write(alguien.edad);
	document.write(alguien.genero);
	}

var func=prompt('De quien desea obtener detalles?')
obtDetalles(func);

var estudiante={
}

registar()


