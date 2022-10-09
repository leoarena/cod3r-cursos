function checarAnoBissexto (ano) {
    const multiploDe4 = ano % 4 == 0
    const multiploDe100 = ano % 100 == 0
    const multiploDe400 = ano % 400 == 0
    return (multiploDe4 && !multiploDe100) || (multiploDe4 && multiploDe400)
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))