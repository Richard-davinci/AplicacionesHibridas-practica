//promesa
function esperarTiempo(ms, mensaje) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(mensaje)
        }, ms)
    })
}

function esperarTiempoConCatch(error = false) {
    return new Promise((resolve, reject) => {
        if (error) {
            reject("Error")
        } else {
            resolve("OK")
        }
    })
}

function A() {
    console.log("A")
}


/*
function B() {
    console.log("B")
}
*/

function C() {
    console.log("C")
}

/*A()*/
/*esperarTiempo(1000, "B").then((valor) => {
    console.log(valor)
})*/
/*B()*/
esperarTiempoConCatch()
    .then(async (mensaje) => {
        A()
        const resultado = await esperarTiempo(1000, mensaje)
        console.log(resultado)
        C()
    })
    /*.then((resultado) => console.log(resultado)))*/
    .catch((error) => console.error(error))
/*C()*/
