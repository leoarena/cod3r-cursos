function media (codigo, nota1, nota2, nota3) {
    let notas = [nota1, nota2, nota3]
    const crescente = (a, b) => a - b
    notas.sort(crescente)
    let peso3 = (notas[0] + notas[1]) * 3
    let peso4 = notas[2] * 4
    let media = ((peso3 + peso4) / 10).toFixed(2)
    return `Aluno: ${codigo} \n Nota 1: ${nota1} \n Nota 2: ${nota2} \n Nota 3: ${nota3} \n Média: ${media} \n ${media >= 5 ? 'APROVADO' : 'REPROVADO'}`
}

console.log(media(123, 8, 7, 9))