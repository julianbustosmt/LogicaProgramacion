/* Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.

Por ejemplo:

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)
*/

const maxProfit = (pricesBtc)=>{
    let bestPrice = [];
    for(let i = 0; i<pricesBtc.length; i++){
        for(let j = 1; j<pricesBtc.length; j++){
            if(bestPrice.length <= 0){
                bestPrice.push(pricesBtc[i],pricesBtc[j])
            }else if(pricesBtc[j]- pricesBtc[i] > bestPrice[1] - bestPrice[0] && i<j){
                bestPrice[0] = pricesBtc[i]
                bestPrice[1] = pricesBtc[j]
            }
        }
    }
    if(bestPrice[1]-bestPrice[0] > 0){
        return(bestPrice[1]-bestPrice[0])
    }else{
        return -1
    }
    return(bestPrice)

} 
const pricesEth = [10, 20, 30, 40, 50, 60, 70]
console.log(maxProfit(pricesEth))

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
console.log(maxProfit(pricesBtc))

const pricesAda = [3, 3, 3, 3, 3]
console.log(maxProfit(pricesAda))

const pricesAdsa = [6, 5, 4, 3]
console.log(maxProfit(pricesAdsa))