
export const cartHelper = (productPrice, quantity, addOrRemove , cupomDiscount?, cupomType?, originalCartPrice?, newProductQuantity?) => {
    
    switch (addOrRemove) {
        case "add":
            if (productPrice) { // if pra nao conflitar os 2 originalPrice que estava no mesmo scop
                let originalPrice:number = productPrice * quantity
                // condição se ja tiver um preço original no cart somar o produto ao preço e aplicar o cupom, se não so aplica o cupom
                originalCartPrice? originalPrice = originalCartPrice + productPrice * quantity : originalPrice = productPrice * quantity    
            
            if (cupomDiscount && cupomType) {
                const finalPrice:number = calcDiscount(originalPrice, cupomDiscount, cupomType)
                return {finalPrice, originalPrice}
            }
            else {
                const finalPrice:number = originalPrice
                return {finalPrice, originalPrice}
            }
            break;
        }
        case "edit":
            if (productPrice) { // if pra nao conflitar os 2 originalPrice que estava no mesmo scop
                let originalPrice:number = productPrice * quantity
                // condição se ja tiver um preço original no cart somar o produto ao preço e aplicar o cupom, se não so aplica o cupom
                originalCartPrice? originalPrice = (originalCartPrice - ( productPrice * quantity)) + (productPrice * newProductQuantity) : originalPrice = originalPrice

                if (cupomDiscount && cupomType) {
                    const finalPrice:number = calcDiscount(originalPrice, cupomDiscount, cupomType)
                    return {finalPrice, originalPrice}
                }
                else {
                    const finalPrice:number = originalPrice
                    return {finalPrice, originalPrice}
                }
                break
            }
        case "rm":
            let originalPrice:number = productPrice * quantity
            // condição se ja tiver um preço original no cart somar o produto ao preço e aplicar o cupom, se não so aplica o cupom
            originalCartPrice? originalPrice = originalCartPrice - productPrice * quantity : originalPrice = originalPrice

            if (cupomDiscount && cupomType) {
                const finalPrice:number = calcDiscount(originalPrice, cupomDiscount, cupomType)
                return {finalPrice, originalPrice}
            }
            else {
                const finalPrice:number = originalPrice
                return {finalPrice, originalPrice}
            }
            break
        default:
            break;
    }
    

}

const calcDiscount = (originalPrice:number, cupomDiscount?:number, cupomType?:string):number => {
    try{
        if(cupomDiscount && cupomType) {
            switch (cupomType) {
                case "%":
                    const desconto = originalPrice * (cupomDiscount / 100); //10%
                    const valor = originalPrice - desconto
                    return valor
                    break;
                case "-":
                    return originalPrice - cupomDiscount
                    break
                default: 
                    return
                    break;
            }
        }   
    }
    catch{
        return
    }
  
     
}

