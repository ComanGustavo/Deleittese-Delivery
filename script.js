const menuData = [
    // --- EMPANADAS ---
   

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

let carrito = [];
const COSTO_ENVIO = 1800;

document.addEventListener('DOMContentLoaded', () => {
    displayMenu();
    setupCategoryButtons();
});

function displayMenu(category = 'Todas') {
    const menuContainer = document.getElementById('menu-list');
    if (!menuContainer) return;
    menuContainer.innerHTML = '';

    const filtered = category === 'Todas' ? menuData : menuData.filter(i => i.category === category);

    filtered.forEach(item => {
        const div = document.createElement('div');
        div.className = 'col-item mb-4';
        div.innerHTML = `
            <div class="card menu-card h-100 ${item.stock ? '' : 'sin-stock'}">
                <img src="${item.image}" class="card-img-top menu-item-image" alt="${item.name}" onerror="this.src='imagen/placeholder.jpg'">
                <div class="card-body d-flex flex-column text-center p-2">
                    <h6 class="card-title fw-bold small" onclick="toggleStock(${item.id})">${item.icon} ${item.name}</h6>
                    <p class="price mt-auto">$${item.price}</p>
                    <button class="btn ${item.stock ? 'btn-dark' : 'btn-secondary disabled'} btn-sm w-100" 
                            onclick="agregarAlCarrito(${item.id})">
                        ${item.stock ? 'Agregar' : 'AGOTADO'}
                    </button>
                </div>
            </div>`;
        menuContainer.appendChild(div);
    });
}

window.agregarAlCarrito = (id) => {
    const prod = menuData.find(i => i.id === id);
    if (!prod || !prod.stock) return;

    const existente = carrito.find(i => i.id === id);
    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({ ...prod, cantidad: 1 });
    }
    actualizarInterfaz();
};

window.actualizarCantidad = (index, delta) => {
    carrito[index].cantidad += delta;
    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }
    actualizarInterfaz();
};

window.eliminarDelCarrito = (index) => {
    carrito.splice(index, 1);
    actualizarInterfaz();
};

function actualizarInterfaz() {
    const count = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const cartCountEl = document.getElementById('cart-count');
    if (cartCountEl) cartCountEl.innerText = count;

    const lista = document.getElementById('lista-carrito');
    if (!lista) return;

    lista.innerHTML = '';
    let subtotal = 0;

    carrito.forEach((item, index) => {
        const precioLimpio = parseInt(item.price.replace(/\./g, ''));
        subtotal += precioLimpio * item.cantidad;

        lista.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center bg-dark text-white border-secondary">
                <div style="width: 50%">${item.name}</div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-warning" onclick="actualizarCantidad(${index}, -1)">-</button>
                    <span class="mx-2">${item.cantidad}</span>
                    <button class="btn btn-sm btn-outline-warning" onclick="actualizarCantidad(${index}, 1)">+</button>
                    <button class="btn btn-sm btn-danger ms-3" onclick="eliminarDelCarrito(${index})"><i class="fas fa-trash"></i></button>
                </div>
            </li>`;
    });

    if (carrito.length > 0) {
        lista.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center list-group-item-info mt-2">
                <div><strong>Envío</strong></div>
                <div>$${COSTO_ENVIO.toLocaleString('es-AR')}</div>
            </li>`;
    }

    const totalFinal = subtotal > 0 ? subtotal + COSTO_ENVIO : 0;
    document.getElementById('total-pago').innerText = `$${totalFinal.toLocaleString('es-AR')}`;

    const selectorPago = document.getElementById('forma-pago');
    const cuadroAlias = document.getElementById('contenedor-alias');
    if (selectorPago && cuadroAlias) {
        cuadroAlias.style.display = (selectorPago.value === "Transferencia") ? 'block' : 'none';
    }
}

window.enviarPedidoWhatsApp = () => {
    const nombre = document.getElementById('cliente-nombre').value;
    const tel = document.getElementById('cliente-tel').value;
    const dir = document.getElementById('cliente-dir').value;
    const pago = document.getElementById('forma-pago').value;
    const total = document.getElementById('total-pago').innerText;

    if (!nombre || !dir || !tel) return alert("Completa tus datos de envío.");
    if (carrito.length === 0) return alert("El carrito está vacío.");

    let mensaje = `*TICKET DE PEDIDO - WEB DELICATTESE*\n`;
    mensaje += `------------------------------------------\n`;
    mensaje += `CLIENTE: ${nombre.toUpperCase()}\n`;
    mensaje += `DIRECCIÓN: ${dir.toUpperCase()}\n`;
    mensaje += `TELÉFONO: ${tel}\n`;
    mensaje += `PAGO: ${pago}\n`;
    mensaje += `------------------------------------------\n\n`;
    mensaje += `*DETALLE DEL PEDIDO:*\n`;

    carrito.forEach(item => {
        mensaje += `*${item.cantidad} x ${item.name.toUpperCase()}*\n`;
    });

    mensaje += `\n------------------------------------------\n`;
    mensaje += `*TOTAL A PAGAR: ${total}*\n`;
    mensaje += `------------------------------------------\n`;

    if (pago === "Transferencia") mensaje += `\n*ESPERANDO COMPROBANTE*\nAlias: facu.deleittese`;

    const numeroDuenio = "5493644679057"; 
    window.open(`https://wa.me/${numeroDuenio}?text=${encodeURIComponent(mensaje)}`, '_blank');

    carrito = [];
    actualizarInterfaz();
    document.querySelectorAll('input').forEach(i => i.value = '');
    bootstrap.Modal.getInstance(document.getElementById('modalCarrito')).hide();
};

window.imprimirTicket = () => {
    const nombre = document.getElementById('cliente-nombre').value || "S/N";
    const dir = document.getElementById('cliente-dir').value || "S/D";
    const total = document.getElementById('total-pago').innerText;

    let ticketHTML = `
        <div style="font-family: monospace; width: 300px; text-align: center;">
            <h2>WEB DELICATTESE</h2>
            <p>-------------------------</p>
            <p style="text-align: left;">CLIENTE: ${nombre}</p>
            <p style="text-align: left;">DIR: ${dir}</p>
            <p>-------------------------</p>
            <table style="width: 100%; text-align: left;">
    `;

    carrito.forEach(item => {
        ticketHTML += `<tr><td>${item.cantidad} x ${item.name}</td></tr>`;
    });

    ticketHTML += `
            </table>
            <p>-------------------------</p>
            <h3 style="text-align: right;">TOTAL: ${total}</h3>
            <p>-------------------------</p>
            <p>¡Gracias por su compra!</p>
        </div>
    `;

    const ventana = window.open('', '_blank');
    ventana.document.write(ticketHTML);
    ventana.print();
    ventana.close();
};

window.modoAdmin = () => {
    const pass = prompt("Acceso Administrador:");
    if (pass === "1234") {
        document.body.classList.toggle("admin-active");
        alert("Modo Admin Activo. Toca los nombres de los platos para pausar stock.");
    }
};

window.toggleStock = (id) => {
    if (!document.body.classList.contains("admin-active")) return;
    const p = menuData.find(i => i.id === id);
    if (p) {
        p.stock = !p.stock;
        displayMenu();
    }
};

function setupCategoryButtons() {
    const cats = ['Todas', ...new Set(menuData.map(i => i.category))];
    const catContainer = document.getElementById('category-buttons');
    if (!catContainer) return;

    catContainer.innerHTML = '';
    cats.forEach(c => {
        const b = document.createElement('button');
        b.className = `btn ${c === 'Todas' ? 'btn-light' : 'btn-outline-light'} btn-sm px-3 me-2 mb-2`;
        b.innerText = c;
        b.onclick = () => {
            displayMenu(c);
            document.querySelectorAll('#category-buttons button').forEach(btn => btn.classList.replace('btn-light', 'btn-outline-light'));
            b.classList.replace('btn-outline-light', 'btn-light');
        };
        catContainer.appendChild(b);
    });
}