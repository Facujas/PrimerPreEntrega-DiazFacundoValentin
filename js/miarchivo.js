let saldo = 1000;
let listaCompras = [
    { producto: "Manzanas", precio: 100 },
    { producto: "Leche", precio: 200 },
    { producto: "Pan", precio: 100 },
    { producto: "Jugo", precio: 50 },
    { producto: "Mayonesa", precio: 150 },
    { producto: "Lechuga", precio: 130 },
    { producto: "Tomate", precio: 130 },
];

function mostrarLista() {
    if (listaCompras.length === 0) {
        mostrarMensaje("La lista de compras está vacía.");
    } else {
        mostrarMensaje("Lista de Compras:\n" + listaCompras.map(item => `${item.producto}: $${item.precio}`).join("\n"));
    }
}

function buscarProductoEnLista() {
    let seguirComprando = true;

    while (seguirComprando) {
        let productoBuscado = prompt("Ingresa un producto para buscar en la lista de compras:");

        if (productoBuscado !== null) {
            let encontrado = listaCompras.find(item => item.producto.toLowerCase() === productoBuscado.toLowerCase());

            if (encontrado) {
                mostrarMensaje(`Sí, "${productoBuscado}" está en la lista de compras. Precio: $${encontrado.precio}`);
                preguntarCompra(productoBuscado, encontrado.precio);
            } else {
                mostrarMensaje(`No, "${productoBuscado}" no está en la lista de compras.`);
            }
        } else {
            mostrarMensaje("Búsqueda cancelada.");
            seguirComprando = false;
        }
    }

    mostrarMensaje(`Gracias por tu visita. Tu saldo final: $${saldo}`);
}

function preguntarCompra(producto, precio) {
    let comprar = prompt(`¿Quieres comprar "${producto}" por $${precio}? (si/no)`);

    if (comprar !== null) {
        if (comprar.toLowerCase() === 'si') {
            if (saldo >= precio) {
                saldo -= precio;
                mostrarMensaje(`Gracias por la compra! ¡Te esperamos la próxima vez para una nueva! Tu saldo actual: $${saldo}`);
            } else {
                mostrarMensaje(`No tienes saldo suficiente para realizar esta compra. Tu saldo actual: $${saldo}`);
            }
        } else if (comprar.toLowerCase() === 'no') {
            mostrarMensaje(`¡Esperamos que vuelvas pronto! Tu saldo actual: $${saldo}`);
        } else {
            mostrarMensaje("Respuesta no válida. Gracias por la visita!");
        }
    } else {
        mostrarMensaje("Compra cancelada. ¡Esperamos verte de nuevo! Se te ha descontado: Tu saldo actual: $${saldo}");
    }
}

function mostrarMensaje(mensaje) {
    console.log(mensaje);
    alert(mensaje);
}

mostrarLista();
buscarProductoEnLista();