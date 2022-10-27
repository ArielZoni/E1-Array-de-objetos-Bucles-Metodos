/* Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) El nombre de cada pizza con su respectivo precio.
d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸 */

let pizzas = [
  {
    id: 1,
    nombre: "Calabresa",
    ingredientes: [
      "tomate",
      "mozzarella",
      "aceitunas",
      "salame",
      "pimienta",
      "anchoa",
    ],
    precio: 1500,
  },
  {
    id: 2,
    nombre: "Napolitana",
    ingredientes: [
      "mozzarella",
      "tomate al natural",
      "ajo",
      "aceitunas verdes",
      "albahaca fresca",
    ],
    precio: 500,
  },
  {
    id: 3,
    nombre: "Palmitos",
    ingredientes: [
      "salsa de tomate",
      "mozzarella",
      "jamon",
      "aceite",
      "palmitos",
      "salsa golf",
      "especias",
    ],
    precio: 800,
  },
  {
    id: 4,
    nombre: "Carioca",
    ingredientes: [
      "salsa de tomate",
      "mozzarella",
      "jamon",
      "anana",
      "caramelo",
      "aceitunas",
      "especias",
    ],
    precio: 1000,
  },
  {
    id: 5,
    nombre: "Caprese",
    ingredientes: [
      "mozzarella",
      "rodajas de tomate",
      "albahaca",
      "aceite oliva",
      "aceitunas",
      "especies",
    ],
    precio: 900,
  },
  {
    id: 6,
    nombre: "Cuatro Quesos",
    ingredientes: ["mozzarella", "provolone", "parmesano", "emmental"],
    precio: 1200,
  },
];

function imprimirArray(_pizza) {
  let idImpar;
  let menos600;

  idImpar = _pizza.filter((item) => item.id % 2 != 0);
  console.log("Las pizzas que tienen un ID IMPAR son:");
  console.log(idImpar.map((name) => `${name.id}:${name.nombre}`).join("\n"));

  console.log("___________________________________");

  menos600 = _pizza.filter((item) => item.precio < 600);
  console.log("La pizza que vale menos de $600 es:");
  console.log(menos600.map((name) => `${name.id}:${name.nombre}`).join("\n"));

  console.log("___________________________________");

  console.log("Este restaurante ofrece las siguientes variedades de pizzas:");
  console.log(
    _pizza
      .map(
        (name) =>
          `${name.id}:${name.nombre} - $${name.precio}\nINGREDIENTES:${name.ingredientes}\n`
      )
      .join("\n")
  );
}

imprimirArray(pizzas);
