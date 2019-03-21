El programa el tiene dos modos de uso  :


1. Listar cursos

Para esta opcion se debe ejecutar :

>node main


2. Realizar el proceso de prematricula en un curso virtual

Para esta opcion el comando es :


>node inscribir -i id_curso -c cedula_usuario -n nombre_usuario

por ejemplo :

>node main inscribir -i 3 -c 667788 -n carlos

el programa termina la ejecucion y genera el archivo de texto pre_matricula.txt si se ingresaron correctamente las opciones.

El contenido de dicho archivo se ve de esta forma :


"el estudiante carlos identificado con cedula 667788 se ha matriculado en el curso estadistica que tiene un costo de 500000 y una duracion de 132 horas"

