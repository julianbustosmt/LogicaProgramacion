/* Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #. */

/*

Ejemplo: 
Si le pasamos el argumento 5, se pintaría esto:
____*____
___***___
__*****__
_*******_
*********
____#____
____#____

*/

const createXmasTree = (height) => {

    let tree = ""
    let n = 1
    for (let i = 1; i <= height; i++) {
        tree += "_".repeat(height - i)
        tree += "*".repeat(n)
        tree += "_".repeat(height - i)
        tree += "\n"
        n += 2
    }

    tree += "_".repeat(height - 1)
    tree += "#"
    tree += "_".repeat(height - 1)
    tree += "\n"
    tree += "_".repeat(height - 1)
    tree += "#"
    tree += "_".repeat(height - 1)

    return tree
}

console.log(createXmasTree(100))