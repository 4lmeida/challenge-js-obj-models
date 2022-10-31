import Order from "./models/order.js";
import * as total from "./services/order-service.js";

const date = document.getElementById("order").innerHTML.split("\n")

const obj = new Order(Number(date[0]), Number(date[1]), Number(date[2]));

const pedido = total.total(obj);

console.log(`Pedido código ${obj.code}`);
console.log(`Valor total: R$ ${pedido.toFixed(2)}`);