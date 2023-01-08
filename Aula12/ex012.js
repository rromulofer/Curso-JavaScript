/*
Autor: Rômulo Souza Fernandes
E-mail: 00119110559@pq.uenf.br
Data de criação: 08/01/23
*/
var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora} horas.`)
if (hora < 12) {
    console.log(`Bom dia! `)
} else if (hora <= 18) {
    console.log(`Boa tarde! `)
} else {
    console.log(`Boa noite!`)
}