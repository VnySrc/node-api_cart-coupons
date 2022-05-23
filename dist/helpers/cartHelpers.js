"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartHelper = void 0;
const cartHelper = (productPrice, quantity, addOrRemove, cupomDiscount, cupomType, originalCartPrice, newProductQuantity) => {
    switch (addOrRemove) {
        case "add":
            if (productPrice) { // if pra nao conflitar os 2 originalPrice que estava no mesmo scop
                let originalPrice = productPrice * quantity;
                // condição se ja tiver um preço original no cart somar o produto ao preço e aplicar o cupom, se não so aplica o cupom
                originalCartPrice ? originalPrice = originalCartPrice + productPrice * quantity : originalPrice = productPrice * quantity;
                if (cupomDiscount && cupomType) {
                    const finalPrice = calcDiscount(originalPrice, cupomDiscount, cupomType);
                    return { finalPrice, originalPrice };
                }
                else {
                    const finalPrice = originalPrice;
                    return { finalPrice, originalPrice };
                }
                break;
            }
        case "edit":
            if (productPrice) { // if pra nao conflitar os 2 originalPrice que estava no mesmo scop
                let originalPrice = productPrice * quantity;
                // condição se ja tiver um preço original no cart somar o produto ao preço e aplicar o cupom, se não so aplica o cupom
                originalCartPrice ? originalPrice = (originalCartPrice - (productPrice * quantity)) + (productPrice * newProductQuantity) : originalPrice = originalPrice;
                if (cupomDiscount && cupomType) {
                    const finalPrice = calcDiscount(originalPrice, cupomDiscount, cupomType);
                    return { finalPrice, originalPrice };
                }
                else {
                    const finalPrice = originalPrice;
                    return { finalPrice, originalPrice };
                }
                break;
            }
        case "rm":
            let originalPrice = productPrice * quantity;
            // condição se ja tiver um preço original no cart somar o produto ao preço e aplicar o cupom, se não so aplica o cupom
            originalCartPrice ? originalPrice = originalCartPrice - productPrice * quantity : originalPrice = originalPrice;
            if (cupomDiscount && cupomType) {
                const finalPrice = calcDiscount(originalPrice, cupomDiscount, cupomType);
                return { finalPrice, originalPrice };
            }
            else {
                const finalPrice = originalPrice;
                return { finalPrice, originalPrice };
            }
            break;
        default:
            break;
    }
};
exports.cartHelper = cartHelper;
const calcDiscount = (originalPrice, cupomDiscount, cupomType) => {
    try {
        if (cupomDiscount && cupomType) {
            switch (cupomType) {
                case "%":
                    const desconto = originalPrice * (cupomDiscount / 100); //10%
                    const valor = originalPrice - desconto;
                    return valor;
                    break;
                case "-":
                    return originalPrice - cupomDiscount;
                    break;
                default:
                    return;
                    break;
            }
        }
    }
    catch (_a) {
        return;
    }
};
//# sourceMappingURL=cartHelpers.js.map