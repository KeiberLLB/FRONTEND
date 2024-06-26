// Promesas

// Crear una promesa

const premiarProyecto = new Promise((resolve, reject) => {
  //Logica de la promesa
  const premiar = true;

  setTimeout(() => {
    if (premiar) {
      resolve(["Juan", "Federico", "Pedro"]);
    } else {
      reject("Ningún grupo fue premiado");
    }
  }, 2000);
});

//Utilizar una promesa
premiarProyecto
  .then((resultado) => {
    console.log("Los ganadores del concurso son: ", resultado.join(", "));
  })
  .catch((error) => {
    console.log("Ocurrio un error");
  });
