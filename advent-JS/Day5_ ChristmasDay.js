/* Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan para navidad 

El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.

¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos 0) o si es una fecha futura (devolveríamos el número de días en negativo -)

Por cierto, la fecha de referencia para saber si es 25 de diciembre es Dec 25, 2021.*/

const daysToXmas = (date) => {
    const chistmasDay = new Date('Dec 25,2021')
    const dayMs = 1000*3600*24 // Milisegundos que tiene un dia.

    //El método getTime() devuelve el valor numérico correspondiente a la hora para la fecha especificada según la hora universal.

    const daysToXmas = Math.ceil((chistmasDay.getTime()-date.getTime())/dayMs)

    return daysToXmas
}


const date = new Date('Dec 25, 2021')
console.log(daysToXmas(date)) // 0
const date1 = new Date('Dec 1, 2021')
console.log(daysToXmas(date1)) // 24
const date2 = new Date('Dec 24, 2021 00:00:01')
console.log(daysToXmas(date2)) // 1
const date3 = new Date('Dec 24, 2021 23:59:59')
console.log(daysToXmas(date3)) // 1
const date4 = new Date("December 20, 2021 03:24:00")
console.log(daysToXmas(date4)) // 5


const date5 = new Date('Dec 26, 2021')
console.log(daysToXmas(date5)) // -1
const date6 = new Date('Dec 31, 2021')
console.log(daysToXmas(date6)) // -6
const date7 = new Date('Jan 1, 2022 00:00:01')
console.log(daysToXmas(date7)) // -7
const date8 = new Date('Jan 1, 2022 23:59:59')
console.log(daysToXmas(date8))