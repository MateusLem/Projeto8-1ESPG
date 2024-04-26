let p1 = prompt("Digite seu NOME")
let p2 = prompt("Digite seu NÚMERO BANCÁRIO")
let p3 = prompt("Digite a DATA DE VENCIMENTO")
let p4 = prompt("Digite seu CVV")
let msg = document.getElementById("msg")

msg.innerHTML=`olá ${p1},\n
seu número bancário é ${p2},\n
a data de vencimento do seu cartão é ${p3}\n
e seu cvv é ${p4}`
