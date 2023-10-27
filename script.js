const menu_slide = document.getElementById("activo")
const contenedor = document.getElementById("contenedor")
const botones = document.getElementById("botones")
const qr = document.getElementById("qr")
const qr2 = document.getElementById("qr2")

//function to do big and small the slide menu
menu_slide.onclick = function () {
  if (contenedor.className == "contenedor active2") {
    contenedor.className = "contenedor"
    botones.className = "botones"
    qr2.className = "qr2"
  }
  menu_slide.classList.toggle("active")
  contenedor.classList.toggle("active")
  botones.classList.toggle("active")
}

const car_toogle = document.getElementById("mi_carrito")
const conteiner_carrito=document.querySelector(".conteiner_carrito")
const conteiner_general=document.querySelector(".conteiner_gral")
const contacto_footer=document.querySelector(".contacto_footer")

let close=0

car_toogle.onclick = function () {
  conteiner_carrito.classList.toggle("active")
  conteiner_general.classList.toggle("active")
  contacto_footer.classList.toggle("active")

  if(close==0){
    car_toogle.name="close-outline"
    close=1
  }

  else{
    car_toogle.name="cart-outline"
    close=0
  }

}

//list of products

let esfera = []
let carrito = []
let carro = 0
let acumulado_carro = 0

const cart_quantity = document.getElementById("cart_quantity")
const total_pesos = document.getElementById("precio_total")
const generar_pedido = document.getElementById("generar_pedido")

let pedido_texto=""

generar_pedido.onclick = function () {

  let longitud_pedido=carrito.length

  for(let i=0; i<=longitud_pedido-1; i++){
    let nombre = document.getElementById("nombre"+(i+1))
    pedido_texto=pedido_texto+"*"+(i+1)+"*.-"+carrito[i][0]+"-"+nombre.value+","
    
  }

  window.location.href = "https://wa.me/5215571461819/?text="+pedido_texto+"Total: $"+costo_total

}

let articulo_item = 1

function create_item(imagen_esfera, cantidad, precio) {

  //se crea div que contiene el aticulo completo
  let conteiner_articulos = document.querySelector(".conteiner_articulos")
  let item = document.createElement("DIV")
  item.classList = "articulo"
  item.id = "articulo"+articulo_item
  conteiner_articulos.appendChild(item)

  let esfera_cart = document.getElementById("articulo" + articulo_item)
  let item2 = document.createElement("IMG")
  esfera_cart.appendChild(item2)
  item2.src = "./images/" + imagen_esfera+ ".PNG"

  item2 = document.createElement("SPAN")
  item2.classList="cantidad_text"
  esfera_cart.appendChild(item2)
  item2.innerHTML = cantidad

  item2 = document.createElement("INPUT")
  item2.id="nombre"+articulo_item
  esfera_cart.appendChild(item2)

  item2 = document.createElement("SPAN")
  item2.classList="precio_text"
  item2.id="precio"+articulo_item
  esfera_cart.appendChild(item2)
  item2.innerHTML = "$" + precio

  articulo_item+=1
}

let costo_total=0

esfera[1] = ["Esfera de gatito", "12x12", 25, true]
const quantity1 = document.getElementById("q1")
const btn1 = document.getElementById("b1")

btn1.onclick = function () {
  carro = parseInt(quantity1.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[1])
    create_item(1, 1,esfera[1][2])
    costo_total=costo_total+esfera[1][2]
  }

  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
  
}


esfera[2] = ["Esfera de hueso", "12x12", 25, true]
const quantity2 = document.getElementById("q2")
const btn2 = document.getElementById("b2")

btn2.onclick = function () {
  carro = parseInt(quantity2.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[2])
    create_item(2, 1,esfera[2][2])
    costo_total=costo_total+esfera[2][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}


esfera[3] = ["Esfera de huella", "12x12", 25, true]
const quantity3 = document.getElementById("q3")
const btn3 = document.getElementById("b3")

btn3.onclick = function () {
  carro = parseInt(quantity3.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[3])
    create_item(3, 1,esfera[3][2])
    costo_total=costo_total+esfera[3][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[4] = ["Esfera de arbol", "12x12", 20, true]
const quantity4 = document.getElementById("q4")
const btn4 = document.getElementById("b4")

btn4.onclick = function () {
  carro = parseInt(quantity4.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[4])
    create_item(4, 1,esfera[4][2])
    costo_total=costo_total+esfera[4][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[5] = ["Esfera de estrella", "12x12", 20, true]
const quantity5 = document.getElementById("q5")
const btn5 = document.getElementById("b5")

btn5.onclick = function () {
  carro = parseInt(quantity5.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[5])
    create_item(5, 1,esfera[5][2])
    costo_total=costo_total+esfera[5][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[6] = ["Esfera de luna", "12x12", 20, true]
const quantity6 = document.getElementById("q6")
const btn6 = document.getElementById("b6")

btn6.onclick = function () {
  carro = parseInt(quantity6.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[6])
    create_item(6, 1,esfera[6][2])
    costo_total=costo_total+esfera[6][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[7] = ["Esfera de reno", "12x12", 25, true]
const quantity7 = document.getElementById("q7")
const btn7 = document.getElementById("b7")

btn7.onclick = function () {
  carro = parseInt(quantity7.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[7])
    create_item(7, 1,esfera[7][2])
    costo_total=costo_total+esfera[7][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[8] = ["Esfera rota c/estrellas", "12x12", 25, true]
const quantity8 = document.getElementById("q8")
const btn8 = document.getElementById("b8")

btn8.onclick = function () {
  carro = parseInt(quantity8.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[8])
    create_item(8, 1,esfera[8][2])
    costo_total=costo_total+esfera[8][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[9] = ["Esfera de reno 2", "12x12", 30, true]
const quantity9 = document.getElementById("q9")
const btn9 = document.getElementById("b9")

btn9.onclick = function () {
  carro = parseInt(quantity9.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[9])
    create_item(9, 1,esfera[9][2])
    costo_total=costo_total+esfera[9][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[10] = ["Esfera de Santa", "12x12", 25, true]
const quantity10 = document.getElementById("q10")
const btn10 = document.getElementById("b10")

btn10.onclick = function () {
  carro = parseInt(quantity10.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[10])
    create_item(10, 1,esfera[10][2])
    costo_total=costo_total+esfera[10][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[11] = ["Esfera de copo 1", "12x12", 20, false]
const quantity11 = document.getElementById("q11")
const btn11 = document.getElementById("b11")

btn11.onclick = function () {
  carro = parseInt(quantity11.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[11])
    create_item(11, 1,esfera[11][2])
    costo_total=costo_total+esfera[11][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[12] = ["Esfera de angel 1", "12x12", 30, false]
const quantity12 = document.getElementById("q12")
const btn12 = document.getElementById("b12")

btn12.onclick = function () {
  carro = parseInt(quantity12.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[12])
    create_item(12, 1,esfera[12][2])
    costo_total=costo_total+esfera[12][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[13] = ["Esfera de angel 2", "12x12", 25, false]
const quantity13 = document.getElementById("q13")
const btn13 = document.getElementById("b13")

btn13.onclick = function () {
  carro = parseInt(quantity13.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[13])
    create_item(13, 1,esfera[13][2])
    costo_total=costo_total+esfera[13][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[14] = ["Esfera de mickey", "12x12", 25, false]
const quantity14 = document.getElementById("q14")
const btn14 = document.getElementById("b14")

btn14.onclick = function () {
  carro = parseInt(quantity14.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[14])
    create_item(14, 1,esfera[14][2])
    costo_total=costo_total+esfera[14][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[15] = ["Esfera de batman", "12x12", 25, true]
const quantity15 = document.getElementById("q15")
const btn15 = document.getElementById("b15")

btn15.onclick = function () {
  carro = parseInt(quantity15.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[15])
    create_item(15, 1,esfera[15][2])
    costo_total=costo_total+esfera[15][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[16] = ["Esfera de flash", "12x12", 25, false]
const quantity16 = document.getElementById("q16")
const btn16 = document.getElementById("b16")

btn16.onclick = function () {
  carro = parseInt(quantity16.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[16])
    create_item(16, 1,esfera[16][2])
    costo_total=costo_total+esfera[16][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[17] = ["Esfera de superman", "12x12", 25, false]
const quantity17 = document.getElementById("q17")
const btn17 = document.getElementById("b17")

btn17.onclick = function () {
  carro = parseInt(quantity17.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[17])
    create_item(17, 1,esfera[17][2])
    costo_total=costo_total+esfera[17][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[18] = ["Esfera de Harry Potter 1", "12x12", 25, false]
const quantity18 = document.getElementById("q18")
const btn18 = document.getElementById("b18")

btn18.onclick = function () {
  carro = parseInt(quantity18.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[18])
    create_item(18, 1,esfera[18][2])
    costo_total=costo_total+esfera[18][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[19] = ["Esfera de Harry Potter 2", "12x12", 25, false]
const quantity19 = document.getElementById("q19")
const btn19 = document.getElementById("b19")

btn19.onclick = function () {
  carro = parseInt(quantity19.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[19])
    create_item(19, 1,esfera[19][2])
    costo_total=costo_total+esfera[19][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[20] = ["Esfera de Harry Potter 3", "12x12", 25, false]
const quantity20 = document.getElementById("q20")
const btn20 = document.getElementById("b20")

btn20.onclick = function () {
  carro = parseInt(quantity20.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[20])
    create_item(20, 1,esfera[20][2])
    costo_total=costo_total+esfera[20][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[21] = ["Esfera de sombrero HP", "12x12", 25, true]
const quantity21 = document.getElementById("q21")
const btn21 = document.getElementById("b21")

btn21.onclick = function () {
  carro = parseInt(quantity21.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[21])
    create_item(21, 1, esfera[21][2])
    costo_total=costo_total+esfera[21][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[22] = ["Esfera navidad estrella", "12x12", 30, true]
const quantity22 = document.getElementById("q22")
const btn22 = document.getElementById("b22")

btn22.onclick = function () {
  carro = parseInt(quantity22.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[22])
    create_item(22, 1, esfera[22][2])
    costo_total=costo_total+esfera[22][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}

esfera[23] = ["Esfera regalo", "12x12", 35, true]
const quantity23 = document.getElementById("q23")
const btn23 = document.getElementById("b23")

btn23.onclick = function () {
  carro = parseInt(quantity23.value)
  acumulado_carro = acumulado_carro + carro
  cart_quantity.innerText = acumulado_carro
  for (let i = 1; i <= carro; i++) {
    carrito.push(esfera[23])
    create_item(23, 1, esfera[23][2])
    costo_total=costo_total+esfera[23][2]
  }
  total_pesos.innerHTML= "TOTAL: $"+ parseInt(costo_total)
}



