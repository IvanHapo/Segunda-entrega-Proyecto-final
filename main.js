const botonAgregar = document.querySelectorAll('button')
const tbody = document.querySelector('.tbody')
let carrito = []

botonAgregar.forEach(btn => {
    btn.addEventListener('click', agregarCarrito)
  })

function agregarCarrito(e){
    const button = e.target
    const item = button.closest('.card')  
    const itemTitulo = item.querySelector('.card-title').textContent;
    const itemPrecio = item.querySelector('.precio').textContent;
    const itemImg = item.querySelector('.card-img-top').src;

    const producto = {
      titulo : itemTitulo,
      precio : itemPrecio,
      img : itemImg,
      cantidad : 1,
    }

    addPruductoCarrito(producto)

}


function addPruductoCarrito(producto){

  carrito.push(producto)

  renderCarrito()
}

function renderCarrito(){
  tbody.innerHTML = ''
  carrito.map(item => {
    const tr = document.createElement('tr')
    tr.classList.add('ItemCarrito')
    const Content = `
    <th scope="row">1</th>
            <td class="table__productos">
              <img src=${item.img}  alt="">
              <h6 class="title">${item.titulo}</h6>
            </td>
            <td class="table__price"><p>${item.precio}</p></td>
            <td class="table__cantidad">
              <input type="number" min="1" value=${item.cantidad} class="input__elemento">
              <button class="delete btn btn-danger">x</button>
            </td>
    
    `
    tr.innerHTML = Content;
    tbody.append(tr)
  })
}
