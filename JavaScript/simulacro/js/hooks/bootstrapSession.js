(() => {
  //Logica
  //Obtenemos la sesión del usuario del localStorage
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  //Obteno la ruta donde el usuario quiere acceder
  const path = window.location.pathname;

  //Corto el path para acceder solamente al archivo que esta intentando acceder el usuario
  const routeActive = path.substring(path.lastIndexOf("/") + 1);

  //Creo una lista con todos los nombre de los archivos que yo quiero proteger
  const privateRoutes = ["administrator.html"];//en el caso del proyecto deben volver privado ver y crear evnetos

  //Si la ruta acutal se encuentra dentro de las privadas Y el usuario no está autenticado entonces lo redirigimos al login

  if (privateRoutes.includes(routeActive) && !isAuthenticated) {
    console.log("NO TIENES PERMISOS");
    window.location.href = "index.html";
  }
})();

//debo llamar este archivo js desde el header en el html a bloquear
