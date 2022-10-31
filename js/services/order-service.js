import * as shipment from "./shipping-service.js"; 

export function total(order) {
    const pedido =  order.basic - order.discount * order.basic / 100.0;

    const frete = shipment.shipment(order);

    return pedido + frete;
};