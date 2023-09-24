const header = document.querySelector("header");
const footer = document.querySelector("footer");

header.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
<div class="container-lg">
  <a href="index.html" class="navbar-brand">
    <img src="assets/img/iconBOXFS.ico" class="logo" alt="boxfs">
    Box FS
  </a>
  <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse1">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarCollapse1">
    <div class="navbar-nav">
      <a href="index.html" class="nav-item nav-link active">Planes</a>
      <a href="productos.html" class="nav-item nav-link">Productos</a>
      <a href="#footer" class="nav-item nav-link" data-target="about">Sobre nosotros</a>
    </div>
    <form class="d-flex ms-auto">
      <input type="text" class="form-control me-sm-2" placeholder="Buscar">
      <button type="submit" class="btn btn-outline-light">Buscar</button>
    </form>
  </div>
</div>
</nav>
`;
footer.innerHTML = `
    
<!-- Grid container -->
<div class="container p-4">
  <!--Grid row-->
  <div class="row mt-4">
    <!--Grid column-->
    <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
      <h5 class="text-uppercase mb-4">¡Potencia tu transformación en nuestro gimnasio!</h5>

      <p>
        Descubre el camino hacia una versión más fuerte y saludable de ti mismo en nuestro gimnasio. Con equipos
        de
        vanguardia, entrenadores expertos y un ambiente motivador, te brindamos las herramientas necesarias para
        alcanzar tus metas fitness. ¡Únete a nuestra comunidad y comienza tu viaje hacia un cuerpo más en forma y
        una mente más saludable hoy mismo!
      </p>
      <div class="mt-4">
        <!-- Facebook -->
        <a type="button" class="btn btn-floating btn-primary btn-lg"><i class="fab fa-facebook-f"></i></a>
        <!-- Dribbble -->
        <a type="button" class="btn btn-floating btn-primary btn-lg"><i class="fab fa-dribbble"></i></a>
        <!-- Twitter -->
        <a type="button" class="btn btn-floating btn-primary btn-lg"><i class="fab fa-twitter"></i></a>
        <!-- Google + -->
        <a type="button" class="btn btn-floating btn-primary btn-lg"><i class="fab fa-google-plus-g"></i></a>
        <!-- Linkedin -->
      </div>
    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-lg-4 col-md-6 mb-4 mb-md-0">

      <ul class="fa-ul" style="margin-left: 1.65em;">
        <li class="mb-3">
          <span class="fa-li"><i class="fas fa-home"></i></span><span class="ms-2">Popayán/Carrera 5 No. 3 -74
            centro</span>
        </li>
        <li class="mb-3">
          <span class="fa-li"><i class="fas fa-envelope"></i></span><span class="ms-2">boxfs@gmail.com</span>
        </li>
        <li class="mb-3">
          <span class="fa-li"><i class="fas fa-phone"></i></span><span class="ms-2">+57 324 567 8832</span>
        </li>
        <!--<li class="mb-3">
                  <span class="fa-li"><i class="fas fa-print"></i></span><span class="ms-2">+ 01 234 567 89</span>
                </li>-->
      </ul>
    </div>
    <!--Grid column-->

    <!--Grid column-->
    <div class="col-lg-4 col-md-6 mb-4 mb-md-0">
      <h5 class="text-uppercase mb-4">Nuestros Horarios</h5>

      <table class="table text-center text-white">
        <tbody class="font-weight-normal">
          <tr>
            <td>Lun - Jue:</td>
            <td>6am - 9pm</td>
          </tr>
          <tr>
            <td>Vie - Sab:</td>
            <td>6am - 10pm</td>
          </tr>
          <tr>
            <td>Domingo:</td>
            <td>8am - 8pm</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!--Grid column-->
  </div>
  <!--Grid row-->
</div>
<!-- Grid container -->
<div class="text-center p-1" style="background-color: rgba(0, 0, 0, 0.2);">
  <p>Trabajo final del Politecnico Internacional, la página no es funcional es solo vista</p>
</div>
`;