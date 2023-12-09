let Nombre;
let Monto;

while (!Nombre) {
  Nombre = prompt("Ingrese su nombre:");

  if (!Nombre) {
    alert("El nombre no puede estar vacío. Por favor, inténtalo de nuevo.");
  }
}

alert("¡Hola " + Nombre + "! Te ayudaré a elegir tus productos!");

let listaProductos = {
  pizza: 500,
  hamburguesa: 400,
  pancho: 200,
  "coca cola": 600,
  sandwich: 800
};

while (!Monto) {
  Monto = prompt("Ingrese un monto:");

  if (!Monto || isNaN(Monto)) {
    alert("Ingrese un monto válido (números) por favor.");
    Monto = null;
  } else {
    let productosDisponibles = [];

    for (let producto in listaProductos) {
      if (listaProductos.hasOwnProperty(producto) && listaProductos[producto] <= Monto) {
        productosDisponibles.push(producto + ": $" + listaProductos[producto]);
      }
    }

    if (productosDisponibles.length > 0) {
      alert("Con el monto ingresado puedes comprar:\n" + productosDisponibles.join("\n"));
    } else {
      alert("No es suficiente para comprar ningún producto de la lista.");
    }
  }
}
