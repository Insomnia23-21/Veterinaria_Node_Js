const fs = require('fs');

const citasFile = './citas.json';

function registrar(nombre, edad, animal, color, enfermedad) {
  let citas = [];
  try {
    const data = fs.readFileSync(citasFile, 'utf8');
    citas = JSON.parse(data);
  } catch (error) {
    // Ignora el error si el archivo no existe (primer uso)
  }

  const nuevaCita = { nombre, edad, animal, color, enfermedad };
  citas.push(nuevaCita);

  fs.writeFileSync(citasFile, JSON.stringify(citas, null, 2));
  console.log("Cita registrada correctamente.");
}

function leer() {
  try {
    const data = fs.readFileSync(citasFile, 'utf8');
    const citas = JSON.parse(data);

    if (citas.length === 0) {
      console.log("No hay citas registradas.");
    } else {
      console.log("Citas:");
      citas.forEach((cita) => {
        console.log(`
          Nombre: ${cita.nombre}
          Edad: ${cita.edad}
          Tipo de animal: ${cita.animal}
          Color: ${cita.color}
          Enfermedad: ${cita.enfermedad}`);
      });
    }
  } catch (error) {
    console.log("No hay citas registradas.");
  }
}

module.exports = { registrar, leer };