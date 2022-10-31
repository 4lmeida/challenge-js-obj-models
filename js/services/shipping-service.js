export function shipment(order) {
    let frete = 0;
    if(order.basic < 100.0) {
        frete = 20.0;
    }
    else if(order.basic < 200.0) {
        frete = 12.00;
    }
    else {
        frete = 0.0;
    }

    return frete;
}