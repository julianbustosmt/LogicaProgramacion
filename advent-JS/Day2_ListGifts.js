/* Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. */

const letter = 'bici coche  balón _playstation bici coche peluche'

const listGifts = (letter) =>{

    const gifts = letter.split(" ")
    let goodKids = gifts.filter((gift) =>
        (!gift.includes("_") && gift !== ""))

    let realGifts = {}
    goodKids.forEach(element => {
        realGifts[element] = realGifts[element] + 1 || 1
    });
    return (realGifts)

}
listGifts(letter)
