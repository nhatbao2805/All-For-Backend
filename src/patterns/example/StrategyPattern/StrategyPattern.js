const preOrderPrice = (originalPrice) => {
    return originalPrice * 0.8;
}

const promotionPrice = (originalPrice) => {
    if (originalPrice <= 200) return originalPrice * 0.1;
    return originalPrice - 30;
}

const blackFridayPrice = (originalPrice) => {
    if (originalPrice <= 200) return originalPrice * 0.1;
    return originalPrice - 50;
}

const listStrategy = {
    preOrder: preOrderPrice,
    promotion: promotionPrice,
    blackFriday: blackFridayPrice,
}

const getPrices = (type, originalPrice) => {

    return listStrategy[type](originalPrice);

}

console.log('---', getPrices('promotion', 300))