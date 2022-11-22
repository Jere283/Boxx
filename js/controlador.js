var categorias = [
  {
    nombreCategoria: "Camisetas Hombre",
    genero: "Hombre",
    portada: "img/Hombre/Camisetas/Portada.webp",
    productos: [
      {
        nombreprod: "Camisa Grafica Hombre Nike",
        genero: "Hombre",
        talla: "L",
        imagen: "img/Hombre/Camisetas/CGH-L-1.webp",
        precio: 250,
      },
      {
        nombreprod: "Camisa Grafica ",
        genero: "Hombre",
        talla: "L",
        imagen: "img/Hombre/Camisetas/CGH-L-2.webp",
        precio: 300,
      },
      {
        nombreprod: "Camisa Grafica ",
        genero: "Hombre",
        talla: "M",
        imagen: "img/Hombre/Camisetas/CGH-M-1.webp",
        precio: 300,
      },
      {
        nombreprod: "Camisa Grafica",
        genero: "Hombre",
        talla: "M",
        imagen: "img/Hombre/Camisetas/CGH-M-2.webp",
        precio: 450,
      },
    ],
  },
  {
    nombreCategoria: "Deportivos Hombre",
    genero: "Hombre",
    portada: "img/Hombre/Camisetas/Portada.webp",
    productos: [
      {
        nombreprod: "SHORTS DEPORTIVOS",
        genero: "Hombre",
        talla: "L",
        imagen: "CGH-L-1.webx",
        precio: 250,
      },
      {
        nombreprod: "CAMISA GRAFICA ",
        genero: "Hombre",
        talla: "L",
        imagen: "CGH-L-2.webx",
        precio: 300,
      },
    ],
  },
];

document.getElementById("nomcat").innerHTML = categorias[0].nombreCategoria;
/*document.getElementById('portadacat').innerHTML+=`<img src="${categorias[0].portada}" class="figure-img img-fluid rounded" alt="...">`;
 */
for (let i = 0; i < categorias[0].productos.length; i++) {
  document.getElementById("primeroca").innerHTML += `
    <div class="col btn" onclick="modalprod(${i})">
    <figure class="figure " data-bs-toggle="modal" data-bs-target="#exampleModal" >
    <img src="${categorias[0].productos[i].imagen}" class="figure-img img-fluid rounded hov shadow" alt="...">
    <figcaption class="figure-caption table-hover">${categorias[0].productos[i].nombreprod}-${categorias[0].productos[i].genero}</figcaption>
    <figcaption class="figure-caption text-dark">L. ${categorias[0].productos[i].precio}</figcaption>
    </figure>
    </div>`;
}

function aumentar() {
  var b = document.getElementById("canti");
  b.value++;
}

function disminuir() {
  var b = document.getElementById("canti");
  if (b.value > 0) {
    b.value--;
  }
}

function modalprod(indice) {
  document.getElementById(
    "cuerpo"
  ).innerHTML += `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Ordenar</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        
            
        <div id="carouselExampleIndicators" class="carousel slide w-100 translate-midle" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/Hombre/Camisetas/CGH-L-1.webp" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="img/Hombre/Camisetas/CGH-L-2.webp" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="img/Hombre/Camisetas/CGH-M-2.webp" class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      <h1 class="modal-title fs-5" id="exampleModalLabel">${categorias[0].productos[indice].nombreprod}</h1>
      <p class="fw-bold fw-2">L.${categorias[0].productos[indice].precio}</p>
      
        <div class="container text-start shadow p-3 mb-2 bg-body rounded shadow">
                <div class="row row-cols-2 p-2 ">
                    <div class="col">
                        <span class="align-middle">Talla</span>
                    </div>
                    <div class="col text-end">
                    <select class="form-select w-100 rounded-pill" aria-label="Default select example">
                    <option selected class="text-center">Seleccionar</option>
                    <option value="1" class="text-center">S</option>
                    <option value="2" class="text-center">M</option>
                    <option value="3" class="text-center">L</option>
                    <option value="4" class="text-center">XL</option>
                  </select>
                    </div>
                </div>
            </div>
        <div class="container text-start shadow p-3 mb-2 bg-body rounded">
                <div class="row row-cols-2 p-2 ">
                    <div class="col">
                        <span class="align-middle">Cantidad</span>
                    </div>
                    <div class="col text-end">
                        <div class="btn-group rounded-pill" role="group" aria-label="Basic example">
                            
                            <input class="form-control text-center rounded-pill" type="number" id="canti" onclick="aumentar()" value=0 aria-label="Disabled input example" >
                            
                        </div>
                    </div>
                </div>
            </div>
        <div class="container text-center">
  
</div>
      
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-dark w-100">Agregar a mi Pedido </button>
        </div>
      </div>
    </div>
  </div>`;
}

/*/function Longitud() {
    alert(categorias.length + " " + categorias[0].nombreCategoria);
    
}/*/
