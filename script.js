// ==========================================
// CONFIGURACIÓN DE FIREBASE
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyB-EjyP-L-L-L-L-L-L-L-L-L-L",
    authDomain: "deleittese-delivery.firebaseapp.com",
    databaseURL: "https://deleittese-delivery-default-rtdb.firebaseio.com",
    projectId: "deleittese-delivery",
    storageBucket: "deleittese-delivery.appspot.com",
    messagingSenderId: "324343076188",
    appId: "1:324343076188:web:8258cca8db166804b01d99"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const database = firebase.database();

// ==========================================
// CONSTANTES
// ==========================================
let carrito = [];
const COSTO_ENVIO = 1800;
const TEL_LOCAL = "5493644146872";

// ==========================================
// DATOS DEL MENÚ
// ==========================================
const menuData = [
    // --- PAPAS FRITAS ---
    { id: 2, name: "Papas Fritas Chica", price: "4.000", category: "Papas Fritas", icon: "🍟", image: "imagen/img58.jpeg", stock: true }, 
    { id: 3, name: "Papas Fritas Mediana", price: "5.000", category: "Papas Fritas", icon: "🍟", image: "imagen/img57.jpeg", stock: true },
    { id: 4, name: "Papas Fritas Grande", price: "6.000", category: "Papas Fritas", icon: "🍟", image: "imagen/img10.jpeg", stock: true },
    { id: 5, name: "Papas con Cheddar", price: "12.000", category: "Papas Fritas", icon: "🍟", image: "imagen/img55.jpeg", stock: true },
    { id: 6, name: "Papas Gratinadas con Cheddar y verdeo", price: "12.000", category: "Papas Fritas", icon: "🍟", image: "imagen/img1.jpeg", stock: true },

    // --- SÁNDWICHES DE MIGA ---
    { id: 7, name: "Carlito", price: "6.000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img8.jpeg", stock: true }, 
    { id: 8, name: "Triple Frío de Verduras con Jamón y Queso", price: "7.000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img7.jpeg", stock: true },
    { id: 44, name: "Triple Tostado con Verduras", price: "7.000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img65.jpeg", stock: true },
    { id: 43, name: "Miga con Jamón y Queso", price: "6.000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img64.jpeg", stock: true },
    { id: 47, name: "Psicodélico con Papas", price: "23.000", category: "Sándwiches de Migas", icon: "🥪", image: "imagen/img70.jpeg", stock: true },

    // --- PIZZAS ---
    { id: 9, name: "Pizza Muzzarella", price: "12.000", category: "Pizzas", icon: "🍕", image: "imagen/img31.jpeg", stock: true }, 
    { id: 10, name: "Pizza Muzzarella y Panceta", price: "14.000", category: "Pizzas", icon: "🍕", image: "imagen/img34.jpeg", stock: true },
    { id: 11, name: "Pizza Calabresa", price: "14.000", category: "Pizzas", icon: "🍕", image: "imagen/img5.jpeg", stock: true },
    { id: 12, name: "Pizza Especial", price: "15.000", category: "Pizzas", icon: "🍕", image: "imagen/img6.jpeg", stock: true },
    { id: 13, name: "Pizza Jamón y Huevos", price: "16.000", category: "Pizzas", icon: "🍕", image: "imagen/img11.jpeg", stock: true },
    { id: 14, name: "Pizza Jamón y Morrones", price: "16.000", category: "Pizzas", icon: "🍕", image: "imagen/img14.jpeg", stock: true },
    { id: 35, name: "Media Pizza Especial Calabresa y Media Pizza Especial Cheddar y Panceta", price: "18.000", category: "Pizzas", icon: "🍕", image: "imagen/img53.jpeg", stock: true },
    { id: 33, name: "Pizza Roquefort y Panceta", price: "16.000", category: "Pizzas", icon: "🍕", image: "imagen/img51.jpeg", stock: true },
    { id: 37, name: "Pizza Cheddar y Panceta", price: "16.000", category: "Pizzas", icon: "🍕", image: "imagen/img59.jpeg", stock: true },
    { id: 39, name: "Pizza Napolitana Completa", price: "19.000", category: "Pizzas", icon: "🍕", image: "imagen/img83.jpeg", stock: true },
    { id: 40, name: "Pizza Especial de Palmitos", price: "19.000", category: "Pizzas", icon: "🍕", image: "imagen/img62.jpeg", stock: true },
    { id: 41, name: "Pizza Jamón y Queso", price: "14.000", category: "Pizzas", icon: "🍕", image: "imagen/img84.jpeg", stock: true },
    { id: 46, name: "Pizza Cuatro Sabores", price: "17.000", category: "Pizzas", icon: "🍕", image: "imagen/img69.jpeg", stock: true },
    { id: 15, name: "Lomopizza", price: "40.000", category: "Pizzas", icon: "🍕", image: "imagen/img4.jpeg", stock: true },

    // --- HAMBURGUESAS ---
    { id: 16, name: "Hamburguesa Simple", price: "7.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img28.jpeg", stock: true }, 
    { id: 17, name: "Hamburguesa Simple + Papas", price: "9.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img29.jpeg", stock: true },
    { id: 18, name: "Hamburguesa Doble Especial con Panceta", price: "13.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img13.jpeg", stock: true },
    { id: 61, name: "Hamburguesa Especial", price: "8.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img90.jpeg", stock: true },
    { id: 45, name: "Hamburguesa Especial con Papas", price: "10.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img68.jpeg", stock: true },
    { id: 19, name: "Hamburguesa Roquefort y Panceta", price: "9.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img32.jpeg", stock: true },
    { id: 191, name: "Hamburguesa Gratinada", price: "10.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img.jpeg", stock: true },
    { id: 192, name: "Hamburguesa Gratinada con Cheddar", price: "11.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img.jpeg", stock: true },
    { id: 32, name: "Hamburguesa al Plato", price: "12.000", category: "Hamburguesas", icon: "🍔", image: "imagen/img50.jpeg", stock: true },

    // --- SÁNDWICHES DE MILA ---
    { id: 20, name: "Sándwich Milanesa de Carne Simple + Papas (Económico)", price: "12.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img26.jpeg", stock: true },
    { id: 62, name: "Sándwich Milanesa de Carne Simple + Papas (Premium)", price: "15.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img.jpeg", stock: true },
    { id: 21, name: "Sándwich Milanesa de Pollo Especial + Papas (Premium)", price: "19.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img.jpeg", stock: true },
    { id: 211, name: "Sándwich Milanesa de Carne (Especial)", price: "17.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img.jpeg", stock: true },
    { id: 212, name: "Sándwich Milanesa de Pollo (Simple)", price: "15.000", category: "Sándwiches de Mila", icon: "🥪", image: "imagen/img.jpeg", stock: true },

    // --- LOMOS ---
    { id: 22, name: "Lomo simple + Papas (Premium)", price: "19.000", category: "Lomos", icon: "🥩", image: "imagen/img25.jpeg", stock: true }, 
    { id: 23, name: "Lomo especial + Papas (Premium)", price: "20.000", category: "Lomos", icon: "🥩", image: "imagen/img22.jpeg", stock: true },
    { id: 34, name: "Lomo con Cheddar y Panceta (Premium)", price: "20.000", category: "Lomos", icon: "🥩", image: "imagen/img52.jpeg", stock: true },
    { id: 70, name: "Lomo Enceballado + Papas (Premium)", price: "19.500", category: "Lomos", icon: "🥩", image: "imagen/img.jpeg", stock: true },
    { id: 72, name: "Lomo Roquefort + Papas (Premium)", price: "20.000", category: "Lomos", icon: "🥩", image: "imagen/img.jpeg", stock: true },

    // --- MILANESAS ---
    { id: 25, name: "Milanesa Napolitana de Carne XL + Papas", price: "27.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img2.jpeg", stock: true }, 
    { id: 76, name: "Milanesa Napolitana de Carne Individual + Papas", price: "16.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/img.jpeg", stock: true }, 
    { id: 28, name: "Milanesa Napolitana de Pollo XL + Papas", price: "27.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img73.jpeg", stock: true },
    { id: 73, name: "Milanesa con Cheddar y Panceta Individual + Papas", price: "16.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/img.jpeg", stock: true }, 
    { id: 74, name: "Milanesa con Cheddar y Panceta XL + Papas", price: "28.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img27.jpeg", stock: true },
    { id: 26, name: "Milanesa Calabresa XL + Papas", price: "27.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img56.jpeg", stock: true },
    { id: 50, name: "Milanesa Fugazza XL + Papas", price: "26.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img75.jpeg", stock: true },
    { id: 501, name: "Milanesa Fugazza Individual", price: "24.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/img75.jpeg", stock: true },
    { id: 48, name: "Milanesa Napolitana de Pollo (Promoción)", price: "25.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/img71.jpeg", stock: true }, 
    { id: 78, name: "Milanesa Individual con Roquefort y Panceta + Papas", price: "16.000", category: "Milanesas Individuales", icon: "🍽️", image: "imagen/img76.jpeg", stock: true },
    { id: 51, name: "Milanesa Muzzarella XL con Panceta y Huevos + Papas", price: "27.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img76.jpeg", stock: true },
    { id: 52, name: "Milanesa a Caballo XL + Papas", price: "22.000", category: "Milanesas p/compartir", icon: "🍽️", image: "imagen/img77.jpeg", stock: true },

    // --- PICADAS ---
    { id: 29, name: "Picada Individual", price: "15.000", category: "Picadas", icon: "🧀", image: "imagen/img67.jpeg", stock: true }, 
    { id: 79, name: "Picada Nueva", price: "15.000", category: "Picadas", icon: "🧀", image: "imagen/img78.jpeg", stock: true },
    { id: 80, name: "Picada 5", price: "16.000", category: "Picadas", icon: "🧀", image: "imagen/img79.jpeg", stock: true },
    { id: 81, name: "Media Picada Clásica 2", price: "16.000", category: "Picadas", icon: "🧀", image: "imagen/img80.jpeg", stock: true },
    { id: 82, name: "Media Picada Clásica 4", price: "16.000", category: "Picadas", icon: "🧀", image: "imagen/img81.jpeg", stock: true },
    { id: 31, name: "Picada Completa", price: "32.000", category: "Picadas", icon: "🧀", image: "imagen/img16.jpeg", stock: true },
    { id: 42, name: "Picada 2", price: "15.000", category: "Picadas", icon: "🧀", image: "imagen/img63.jpeg", stock: true },
    { id: 86, name: "Picada Clásica", price: "28.000", category: "Picadas", icon: "🧀", image: "imagen/img88.jpeg", stock: true },
    { id: 87, name: "Picada Clásica Completa", price: "32.000", category: "Picadas", icon: "🧀", image: "imagen/img88.jpeg", stock: true },
    { id: 85, name: "Picada Clásica 1", price: "25.000", category: "Picadas", icon: "🧀", image: "imagen/img87.jpeg", stock: true },
    { id: 49, name: "Picada Clásica 3", price: "26.000", category: "Picadas", icon: "🧀", image: "imagen/img72.jpeg", stock: true },
    { id: 84, name: "Picada Clásica 4", price: "28.000", category: "Picadas", icon: "🧀", image: "imagen/img86.jpeg", stock: true },
    { id: 30, name: "Picada para 2", price: "25.000", category: "Picadas", icon: "🧀", image: "imagen/img15.jpeg", stock: true },
    { id: 311, name: "Picada Familiar", price: "30.000", category: "Picadas", icon: "🧀", image: "imagen/img16.jpeg", stock: true }
];
// ==========================================
// RENDERIZADO
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    displayMenu();
    setupCategoryButtons();
});

function displayMenu(category = "Todos") {
    const contenedor = document.getElementById("menu-list");
    if (!contenedor) return;
    const productosFiltrados = category === "Todos" ? menuData : menuData.filter(p => p.category === category);
    contenedor.innerHTML = "";
    productosFiltrados.forEach(p => {
        contenedor.innerHTML += `
            <div class="col">
                <div class="card h-100 shadow-sm border-dark">
                    <img src="${p.image}" class="card-img-top" alt="${p.name}" style="height: 200px; object-fit: cover;">
                    <div class="card-body text-center">
                        <h5 class="card-title fw-bold">${p.icon} ${p.name}</h5>
                        <p class="card-text text-success fs-5 fw-bold">$${p.price}</p>
                        <button class="btn btn-primary w-100" onclick="agregarAlCarrito(${p.id})">
                            <i class="fas fa-plus me-2"></i>Agregar
                        </button>
                    </div>
                </div>
            </div>`;
    });
}

function setupCategoryButtons() {
    const btnContainer = document.getElementById("category-buttons");
    if (!btnContainer) return;
    const categorias = ["Todos", ...new Set(menuData.map(p => p.category))];
    btnContainer.innerHTML = "";
    categorias.forEach(cat => {
        btnContainer.innerHTML += `<button class="btn btn-outline-dark btn-sm fw-bold mx-1 mb-2" onclick="displayMenu('${cat}')">${cat}</button>`;
    });
}

// ==========================================
// CARRITO
// ==========================================
window.agregarAlCarrito = id => {
    const p = menuData.find(i => i.id === id);
    const e = carrito.find(i => i.id === id);
    e ? e.cantidad++ : carrito.push({ ...p, cantidad: 1 });
    actualizarInterfaz();
};

function actualizarInterfaz() {
    const lista = document.getElementById("lista-carrito");
    const contador = document.getElementById("cart-count");
    if (!lista) return;
    lista.innerHTML = "";
    let total = 0;
    let cantTotal = 0;
    carrito.forEach((i, idx) => {
        const precio = parseInt(i.price.replace(/\./g, ""));
        total += precio * i.cantidad;
        cantTotal += i.cantidad;
        lista.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center border-dark">
            <div><span class="fw-bold">${i.cantidad}x</span> ${i.name}</div>
            <button class="btn btn-danger btn-sm" onclick="eliminarDelCarrito(${idx})"><i class="fas fa-trash"></i></button>
        </li>`;
    });
    if(contador) contador.innerText = cantTotal;
    const metodo = document.getElementById("metodo-entrega")?.value;
    const envio = metodo === "Envio" ? COSTO_ENVIO : 0;
    const totalElem = document.getElementById("total-pago");
    if(totalElem) totalElem.innerText = `$${(total + envio).toLocaleString("es-AR")}`;
}

window.eliminarDelCarrito = i => { carrito.splice(i, 1); actualizarInterfaz(); };

window.cambioMetodoEntrega = () => {
    const metodo = document.getElementById("metodo-entrega").value;
    const aviso = document.getElementById("aviso-envio");
    const inputDir = document.getElementById("cliente-dir");
    if(metodo === "Retiro") {
        aviso.innerText = "Retiro sin costo adicional";
        inputDir.placeholder = "Retiro en local (opcional)";
    } else {
        aviso.innerText = "El envío tiene un costo adicional de $1.800";
        inputDir.placeholder = "Dirección de entrega";
    }
    actualizarInterfaz();
};

// ==========================================
// ENVÍO Y ADMIN
// ==========================================
window.enviarAlPanelAdmin = () => {
    const nombre = document.getElementById('cliente-nombre').value;
    const tel = document.getElementById('cliente-tel').value;
    const direccion = document.getElementById('cliente-dir').value || "Retiro en Local";
    const pago = document.getElementById('forma-pago').value;
    const nota = document.getElementById('cliente-nota').value;
    const total = document.getElementById('total-pago').innerText;

    if (!nombre || !tel || carrito.length === 0) {
        alert("⚠️ Completa nombre, teléfono y agrega productos.");
        return;
    }

    const nuevoPedido = {
        cliente: nombre,
        telefono: tel,
        direccion: direccion,
        pago: pago,
        nota: nota,
        items: carrito.map(item => ({ nombre: item.name, cant: item.cantidad })),
        total: total,
        fecha: new Date().toLocaleString(),
        estado: "Pendiente"
    };

    database.ref("pedidos").push(nuevoPedido)
        .then(() => {
            alert("✅ ¡Pedido enviado con éxito al panel!");
            carrito = [];
            actualizarInterfaz();
            const modalElem = document.getElementById('modalCarrito');
            const modal = bootstrap.Modal.getInstance(modalElem);
            if (modal) modal.hide();
        })
        .catch(err => alert("Error: " + err));
};
window.enviarPorWhatsApp = () => {
    if (carrito.length === 0) return alert("El carrito está vacío");

    // Capturamos los datos con los IDs de tu HTML
    const nombre = document.getElementById('cliente-nombre')?.value || "Cliente";
    const direccion = document.getElementById('cliente-direccion')?.value || "No indicada";
    // Si el valor del envío es un texto (ej: $500), capturalo así:
    const envio = document.getElementById('valor-envio')?.innerText || "$0";
    const total = document.getElementById("total-pago")?.innerText || "$0";
    
    let itemsTexto = "";
    carrito.forEach(i => itemsTexto += `${i.cantidad}x ${i.name}, `);

    const urlBase = "https://comangustavo.github.io/Deleittese-Delivery";
    
    // CONSTRUCCIÓN DEL LINK SEGURO
    // Usamos etiquetas claras: cliente, direccion, pedido, envio, total
    const linkTicket = `${urlBase}/ticket.html?cliente=${encodeURIComponent(nombre)}&direccion=${encodeURIComponent(direccion)}&pedido=${encodeURIComponent(itemsTexto)}&envio=${encodeURIComponent(envio)}&total=${encodeURIComponent(total)}`;

    let msg = `*NUEVO PEDIDO - DELEITTESE*%0A`;
    msg += `*Cliente:* ${nombre}%0A`;
    msg += `*Dirección:* ${direccion}%0A%0A`;
    carrito.forEach(i => msg += `- ${i.cantidad}x ${i.name}%0A`);
    msg += `%0A*ENVÍO:* ${envio}`;
    msg += `%0A*TOTAL:* ${total}`;
    msg += `%0A%0A*IMPRIMIR TICKET AQUÍ:*%0A${linkTicket}`; 
    
    window.open(`https://wa.me/${TEL_LOCAL}?text=${msg}`, "_blank");
};


window.accesoAdmin = () => {
    const clave = prompt("Ingrese la clave de administrador:");
    if (clave === "deleittese2026") {
        window.location.href = "admin.html"; 
    } else {
        alert("Clave incorrecta.");
    }

    
};