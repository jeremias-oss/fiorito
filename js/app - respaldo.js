
let total = [];

//Calculador de total
let suma = 0;
function calculator(){    
    for (let i = 0; i < total.length; i++) {
        suma += total[i];
    };
};

//precios de productos
//"Elija su pizza: \n 1 - Muzzarella $2000 \n 2 - Especial $2700 \n 3 - Fugazzetta $2300 \n 4 - Napolitana $2500"
const pizzaPrice = [2000, 2700, 2300, 2500];
//"Elija su sandwich: \n 1 - Hamburguesa $1500 \n 2 - Hamburguesa completa $2000 \n 3 - Lomo $1500 \n 4 - Lomo completo $2000"
const sandwichPrice = [1500, 2000, 1500, 2000];
//"Elija su bebida: \n 1 - Coca lata $500 \n 2 - Coca litro $1000 \n 3 - Sprite lata $500 \n 4 - Sprite litro $1000"
const drinkPrice = [500, 1000, 500, 1000];

//Selector de pizza
function selectPizza() {        
    let pizzaText = prompt("Elija su pizza: \n 1 - Muzzarella $2000 \n 2 - Especial $2700 \n 3 - Fugazzetta $2300 \n 4 - Napolitana $2500");
    if (pizzaText == 1) {
        total.unshift(pizzaPrice[0]);        
        addProduct();
    } else if (pizzaText == 2) {
        total.unshift(pizzaPrice[1]);
        addProduct();
    } else if (pizzaText == 3) {
        total.unshift(pizzaPrice[2]);
        addProduct();
    } else if (pizzaText == 4) {
        total.unshift(pizzaPrice[3]);
        addProduct();
    };
};

//Selector de sandwich
function selectSandwich() {        
    let sandwichText = prompt("Elija su sandwich: \n 1 - Hamburguesa $1500 \n 2 - Hamburguesa completa $2000 \n 3 - Lomo $1500 \n 4 - Lomo completo $2000");
    if (sandwichText == 1) {
        total.unshift(sandwichPrice[0]);        
        addProduct();
    } else if (sandwichText == 2) {
        total.unshift(sandwichPrice[1]);
        addProduct();
    } else if (sandwichText == 3) {
        total.unshift(sandwichPrice[2]);
        addProduct();
    } else if (sandwichText == 4) {
        total.unshift(sandwichPrice[3]);
        addProduct();
    };
};

//Selector de bebida
function selectDrink() {        
    let drinkText = prompt("Elija su bebida: \n 1 - Coca lata $500 \n 2 - Coca litro $1000 \n 3 - Sprite lata $500 \n 4 - Sprite litro $1000");
    if (drinkText == 1) {
        total.unshift(drinkPrice[0]);        
        addProduct();
    } else if (drinkText == 2) {
        total.unshift(drinkPrice[1]);
        addProduct();
    } else if (drinkText == 3) {
        total.unshift(drinkPrice[2]);
        addProduct();
    } else if (drinkText == 4) {
        total.unshift(drinkPrice[3]);
        addProduct();
    };
};

//Finalizar pedido
function addAdress() {
    let adressText = prompt ("Ingresá tu direccón dirección");
    let endOrder = prompt ("Tu total es de " + suma + " y tu dirección es " + adressText + " ¿Es correcto? \n 1 - Si \n 2 - No")
    if (endOrder == 1) {
        window.alert("¡Tu pedido está en camino!")
    } else if (endOrder == 2) {
        welcome();
    };
};

//Agregar otro procto
function addProduct() {
    let addProductText = prompt ("¿Querés agregar algo más? \n 1 - Si \n 2 - No");
    if (addProductText == 1) {
        welcome();
    }else if (addProductText == 2) {
        calculator();
        window.alert("Tu total es de $" + suma);
        addAdress();
}    
};

//Funcion inicial
function welcome() {
    let welcomeText = prompt("Bienvenido a fiorito ¿Que va a querer? \n 1 - pizza \n 2 - sandwich \n 3 - bebida");
    if (welcomeText == 1) {
        selectPizza();
    } else if (welcomeText == 2) {
        selectSandwich();
    } else if (welcomeText == 3) {
        selectDrink();
    };
};


welcome();
