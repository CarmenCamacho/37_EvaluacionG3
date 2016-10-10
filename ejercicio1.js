/*
Inicio
For (i=0 hasta i>=2 incrementa i en 1 cada vez)
	Escribe (Primer jugador, primer turno: escoge Piedra, Papel o tijeras)
	Lee jugador1
	Escribe (Segundo jugador, primer turno: escoge Piedra, Papel o tijeras)
	Lee jugador2
	Si jugador1=jugador2{ 
		Write es un empate
	Else If jugador1=piedra and jugador2=tijeras 
		Write (Jugador1 gana round1)
		contador J1=J1+1
	Else if jugador1=papel and jugador2=piedra
		Write (Jugador1 gana round1);
		contador J1=J1+1
	Else if jugador1=tijeras and jugador2=papel
		Write (Jugador1 gana round1);
		contador J1=J1+1
	Else 
		Write (Jugador2 gana round1);
		contador J2=J2+1
}
*/
var Jugador2='';
var Jugador1='';
var J1=0;
var J2=0;

for (var i = 0; i <= 2; i++) 
	{	
	Jugador1=prompt('Primer jugador, primer turno: escoge piedra, papel o tijeras'); /*solo funciona con lowerCase*/
	Jugador2=prompt('Segundo jugador, primer turno: escoge piedra, papel o tijeras');
	if(Jugador1==Jugador2)
	{
		document.write(Jugador1 + " Vs " + Jugador2);
		document.write(" Round " + (i+1) + " es un Empate \n");
	}
	else 
		{
		 if (Jugador1=='piedra' && Jugador2=='tijeras')
		  	{
		  	document.write(Jugador1 + " Vs " + Jugador2);
			document.write(" Round " + (i+1) + " gana Jugador 1 \n");
			J1=(J1+1);
			}
			else if (Jugador1=='papel' && Jugador2=='piedra')
			  	{
			  	document.write(Jugador1 + " Vs " + Jugador2);
				document.write(" Round " + (i+1) + " gana Jugador 1 \n");
				J1=(J1+1);
				}
			else if (Jugador1=='tijeras' && Jugador2=='papel')
			  	{
			  	document.write(Jugador1 + " Vs " + Jugador2);
				document.write(" Round " + (i+1) + " gana Jugador 1 \n");
				J1=(J1+1);
				}
		else 
			{
			document.write(Jugador1 + " Vs " + Jugador2);
			document.write(" Round " + (i+1) + " gana Jugador 2 \n");
			J2=(J2+1);
			}
		}
	}
if(J1>J2)
	{
	document.write('\n JUGADOR UNO ES EL GANADOR');
	}
else if (J2>J1)
	{
	document.write('\n JUGADOR DOS ES EL GANADOR');
	}
else{
	document.write('\n HUBO EMPATE');
	}

