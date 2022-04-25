/* El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis..

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!
. */


const letterTrue1 = "bici coche )balón( bici coche peluche"
const letterTrue2 = "(muñeca) consola bici"
const letterFalse1 = "bici coche (balón bici coche"
const letterFalse2 = "peluche (bici [coche) bici coche balón"

const isValid = (letter) => {
    let valid = true
        if (letter.includes("{") || letter.includes("[") || letter.includes("()")) {
            valid = false
        } else {
            if(letter.includes("(") && !letter.includes(")")){
                valid = false
            }
        }
        for (let i = 0; i<letter.lenght; i++){
          if (letter[i][0] == ")" && letter[i][-1] == "("){
            valid = false 
          }
        }
        return valid
}

console.log(isValid(letterFalse1))