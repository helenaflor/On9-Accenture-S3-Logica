const readlineSync = require("readline-sync")
const texto = readlineSync.question("digite o texto a ser invertido: ")
let invertido = ""
const tamanho = texto.length
for (let i = tamanho - 1; i >= 0; i--){
    invertido = invertido + texto[i]
}
console.log("o texto invertido é: " + invertido)