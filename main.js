let cursos = [{
  id: '1',
  nombre: 'java',
  duracion: 360,
  valor: 350000
}, {
  id: '2',
  nombre: 'css',
  duracion: 60,
  valor: 200000
}, {
  id: '3',
  nombre: 'estadistica',
  duracion: 132,
  valor: 500000
}];

const parametros = {
  id: {
    demand: true,
    alias: 'i'
  },
  nombre: {
    demand: true,
    alias: 'n'
  },
  cedula: {
    demand: true,
    alias: 'c'
  }

};

const argv = require('yargs')
  .command('inscribir', 'Pre-Matricula el usuario en un curso virtual', parametros)
  .argv;


const fs = require('fs');



var offset = 0;

let cursoMostrar = (idcurso, callback) => {
  setTimeout(function() {
    let cur = cursos.find(curso => curso.id == idcurso);
    callback(cur);
  }, 2000 + offset);
  offset += 2000;
};


let crearArchivo = (id, nombre, cc) => {
  let cur = cursos.find(curso => curso.id == id);
  if (cur == null) {
    console.log("No se ha encontrado curso con id " + id);
    return;
  }
  texto = 'el estudiante ' + nombre + ' identificado con cedula ' + cc + ' se ha matriculado en el curso ' + cur.nombre + ' que tiene un costo de ' + cur.valor + ' y una duracion de ' + cur.duracion + ' horas';
  fs.writeFile('pre_matricula.txt', texto, (err) => {
    if (err) {
      console.log('se ha producido un error : ' + err);
    } else {
      console.log('Se ha creado el archivo. Prematricula exitosa');
    }
  })
};

if (argv._[0] != 'inscribir') {
  cursoMostrar(1, function(cur) {
    console.log('El id del curso es ' + cur.id + ' nombre  ' + cur.nombre + ' tiene una duracion de ' + cur.duracion + ' horas y un valor de ' + cur.valor + ' pesos')
  });

  cursoMostrar(2, function(cur) {
    console.log('El id del curso es ' + cur.id + ' nombre  ' + cur.nombre + ' tiene una duracion de ' + cur.duracion + ' horas y un valor de ' + cur.valor + ' pesos')
  });

  cursoMostrar(3, function(cur) {
    console.log('El id del curso es ' + cur.id + ' nombre  ' + cur.nombre + ' tiene una duracion de ' + cur.duracion + ' horas y un valor de ' + cur.valor + ' pesos')
  });
} else {
  crearArchivo(argv.i, argv.n, argv.c);
}