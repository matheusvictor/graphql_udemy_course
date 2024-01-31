module.exports = {
    priceWithDiscount(parentObj) {
        if (parentObj.discount && parentObj.discount <= 100) {
           return parentObj.price - (parentObj.price * (parentObj.discount/100));
        }
        return parentObj.price;
    }
}
