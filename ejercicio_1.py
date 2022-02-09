
#1- Definir una función max() que tome como argumento dos números y devuelva el mayor de ellos.
import re

def max(numero1 , numero2):
    if numero1 > numero2:
        return numero1
    elif numero2 > numero1:
        return numero2
    else:
        print("Los numeros son iguales")

max(2,2)

#2- Definir una función max_de_tres(), que tome tres números como argumentos y devuelva el mayor de ellos.

def  max_de_3(numero1 , numero2, numero3):

    if numero1 > numero2 and numero1 > numero3:
        return numero1
    elif numero1 > numero2 and numero1 == numero3:
        return numero1
    elif numero1 == numero2 and numero1 > numero3:
        return numero1
    elif numero2 > numero1 and numero2 > numero3:
        return numero2
    elif numero2 > numero1 and numero2 == numero3:
        return numero2
    elif numero3 > numero1 and numero3 > numero2:
        return numero3
    else: 
        print("Los 3 numeros son iguales")

max_de_3(4,7,7)



#4- Escribir una función que tome un carácter y devuelva True si es una vocal, de lo contrario devuelve False.


def vocal(vocal):
    vocales = ["a","e","i","o","u"]
    vocal_final = vocal.lower()
    return vocal_final in vocales

vocal("d")

#5- Escribir una función sum() y una función multip() que sumen y multipliquen respectivamente todos los números de una lista. Por ejemplo: sum([1,2,3,4]) debería devolver 10 y multip([1,2,3,4]) debería devolver 24.

def sum(lista):
    suma = 0
    for i in (lista):
        suma += i
    return suma

sum([1,2,3,4])

def multip(lista):
    suma = 1
    for i in (lista):
        suma *= i
    return suma

multip([1,2,3,4])

#6- Definir una función inversa() que calcule la inversión de una cadena. Por ejemplo la cadena "estoy probando" debería devolver la cadena "odnaborp yotse"

def inversa(string):
    inversa = ""
    for i in range(len(string)):
        inversa += string[-(i+1)]
    return inversa

inversa("Esto es una cadena")


#7 - Definir una función es_palindromo() que reconoce palíndromos (es decir, palabras que tienen el mismo aspecto escritas invertidas), ejemplo: es_palindromo ("radar") tendría que devolver True.

def es_palindromo(string):
    inversa = ""
    for i in range(len(string)):
        inversa += string[-(i+1)]
    return (string == inversa)

es_palindromo("radar")

#8- Definir una función superposicion() que tome dos listas y devuelva True si tienen al menos 1 miembro en común o devuelva False de lo contrario. Escribir la función usando el bucle for anidado.

def superposicion(lista1, lista2):
    for i in lista1:
        for j in lista2:
            return j==i

superposicion(["a","b","c"],["a","b","c"])

#9- Definir una función generar_n_caracteres() que tome un entero n y devuelva el caracter multiplicado por n. Por ejemplo: generar_n_caracteres(5, "x") debería devolver "xxxxx".

def generar_n_caracteres(n,caracter):
    return n*caracter

generar_n_caracteres(7,"b")

'''10- Definir un histograma procedimiento() que tome una lista de números enteros e imprima un histograma en la pantalla. Ejemplo: procedimiento([4, 9, 7]) debería imprimir lo siguiente:
****
*********
*******
'''

def histograma(array):
    histograma = ""
    for i in array:
        histograma += "*"*i +"\n"
    print(histograma) 

histograma([4, 9, 7])