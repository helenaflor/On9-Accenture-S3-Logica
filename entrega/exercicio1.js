let anos = 0
let atualPaisA = 80000
let atualPaisB = 200000
while(atualPaisA < atualPaisB){
    anos = anos + 1
    atualPaisA = atualPaisA + ((3/100)*atualPaisA)
    atualPaisB = atualPaisB + ((1.5/100)*atualPaisB)
}
console.log("foram necessários " + anos + " anos")
