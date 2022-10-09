// I.I.F.E => Immediatly Invoked Function Expression
(function(name) {
    let x = 9
    console.log("Hello!")
    console.log(name)
})("Arthur");

((name) => {
    let x = 9
    console.log("Hello!")
    console.log(name)
})("Arthur")
