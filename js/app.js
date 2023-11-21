const pizzas = [
    {
        nombre: "MUZZA",
        precio: 1050,
        descripción: "Simple y clásica.",
    },
    {
        nombre: "ESPECIAL",
        precio: 1150,
        descripción: "Jamón, queso y morrones.",
    },
    {
        nombre: "NAPOLITANA CLÁSICA",
        precio: 1200,
        descripción: "Con rodajas de tomate, orégano y aceitunas.",
    }
];

const sandwichs = [
    {
        nombre: "MILANESA PARA 1",
        precio: 850,
        descripción: "Pan casero, jamón, queso, tomate, huevo y cebolla caramelizada.",
    },
    {
        nombre: "MILANESA PARA 2",
        precio: 1500,
        descripción: "Pan casero, jamón, queso, tomate, huevo y cebolla caramelizada.",
    },
    {
        nombre: "LOMO PARA 1",
        precio: 850,
        descripción: "Pan casero, lomo, jamón, queso, tomate, huevos y cebolla caramelizada.",
    },
    {
        nombre: "LOMO PARA 2",
        precio: 1500,
        descripción: "Pan casero, lomo, jamón, queso, tomate, huevos y cebolla caramelizada.",
    },
];

const empanadas = [
    {
        nombre: "CARNE",
        precio: 150,
        descripción: "Empanada de carne.",
    },
    {
        nombre: "JAMON Y QUESO",
        precio: 150,
        descripción: "Empanada de jamón y queso."
    },
    {
        nombre: "VEGGIE",
        precio: 120,
        descripción: "Empanada de vegetariana."
    },
];

const bebidas = [
    {
        nombre: "QUILMES LATA",
        precio: 350,
        descripción: "Cerveza en lata 475 mm."
    },
    {
        nombre: "AGUA",
        precio: 200,
        descripción: "Agua en botella chica."
    },
    {
        nombre: "GASESA CHICA",
        precio: 250,
        descripción: "Gaseosa en botella chica."
    },
];

const containerPizza = document.getElementById ("pizza");

const containerSandwich = document.getElementById ("sandwich");

const containerEmpanada = document.getElementById ("empanadas");

const containerBebidas = document.getElementById ("bebidas");

const pizzaRender = () => {
    pizzas.forEach((pizza) => {
        const pizzaItem = document.createElement("div");
        pizzaItem.classList.add("item_container");
        pizzaItem.innerHTML =`
                <div class="text_container">
                <p class="item_title">${pizza.nombre} $${pizza.precio}</p>
                <p class="item_description">${pizza.descripción}</p>           
                </div>
                <div class="add_button">+</div>
                `;

        containerPizza.append(pizzaItem);    
    });    
};


const sandwichRender = () => {
    sandwichs.forEach((sandwich) => {
        const sandwichItem = document.createElement("div");
        sandwichItem.classList.add("item_container");
        sandwichItem.innerHTML =`
                <div class="text_container">
                <p class="item_title">${sandwich.nombre} $${sandwich.precio}</p>
                <p class="item_description">${sandwich.descripción}</p>           
                </div>
                <div class="add_button">+</div>
                `;

        containerSandwich.append(sandwichItem);    
    });    
};

const empanadasRender = () => {
    empanadas.forEach((empanada) => {
        const empanadaItem = document.createElement("div");
        empanadaItem.classList.add("item_container");
        empanadaItem.innerHTML =`
                <div class="text_container">
                <p class="item_title">${empanada.nombre} $${empanada.precio}</p>
                <p class="item_description">${empanada.descripción}</p>           
                </div>
                <div class="add_button">+</div>
                `;

            containerEmpanada.append(empanadaItem);    
    });    
};

const bebidasRender = () => {
    bebidas.forEach((bebida) => {
        const bebidasItem = document.createElement("div");
        bebidasItem.classList.add("item_container");
        bebidasItem.innerHTML =`
                <div class="text_container">
                <p class="item_title">${bebida.nombre} $${bebida.precio}</p>
                <p class="item_description">${bebida.descripción}</p>           
                </div>
                <div class="add_button">+</div>
                `;

        containerBebidas.append(bebidasItem);    
    });    
};

pizzaRender();
sandwichRender();
empanadasRender();
bebidasRender();

const botonCarrito = document.getElementsByClassName("add_button");


const agregarProducto = (e) => {
    //window.alert("el boton funciona");
    if (e.target.classList.contains("add_button")) {
        const productoAgregado = e.target.parentElement;
        
    }
}

botonCarrito.addEventListener('click', agregarProducto);