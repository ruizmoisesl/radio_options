let btnRio = document.getElementById("btnRio");
let btnPintura= document.getElementById("btnPintura")
let btnCapital= document.getElementById("btnCapital")
let btnCientifico= document.getElementById("btnCientifico")
let btnMundo= document.getElementById("btnMundo")
let btnEscritor= document.getElementById("btnEscritor")
let btnOceano= document.getElementById("btnOceano")
let btnMetal= document.getElementById("btnMetal")
let btnLuna= document.getElementById("btnLuna")
let btnPais= document.getElementById("btnPais")

let divPuntos= document.getElementById("divPuntos");

document.addEventListener('DOMContentLoaded', () => {
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `
})

let puntos= 0

btnRio.addEventListener("click",() => {

    if (document.getElementById('Nilo').checked=== true){
        puntos+= 10
        Swal.fire({
            icon: 'success',
            title: 'Respuesta Correcta',
            text: `Ganaste 10 puntos`,
            footer: `Llevas ${puntos}`
        })
    divPuntos.innerHTML = `
    Puntos:
       ${puntos}
    `   
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `Llevas ${puntos}`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `
    }

})

btnPintura.addEventListener("click",() => {

    if (document.getElementById('davinci').checked=== true){
        puntos+= 10
        Swal.fire({
            icon: 'success',
            title: 'Respuesta Correcta',
            text: `Ganaste 10 puntos`,
            footer: `Llevas ${puntos}`

        
        })
    divPuntos.innerHTML = `
    Puntos:
       ${puntos}
    `     
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `Llevas ${puntos}`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `
    }

})

btnCapital.addEventListener("click",() => {

    if (document.getElementById('canberra').checked=== true){
        puntos+= 10
        Swal.fire({
            icon: 'success',
            title: 'Respuesta Correcta',
            text: `Ganaste 10 puntos`,
            footer: `Llevas ${puntos}`

        
        })
    divPuntos.innerHTML = `
    Puntos:
       ${puntos}
    `     
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `Llevas ${puntos}`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `
    }

})

btnCientifico.addEventListener("click",() => {

    if (document.getElementById('einstein').checked=== true){
        puntos+= 10
        Swal.fire({
            icon: 'success',
            title: 'Respuesta Correcta',
            text: `Ganaste 10 puntos`,
            footer: `Llevas ${puntos}`

        
        })
    divPuntos.innerHTML = `
    Puntos:
       ${puntos}
    `     
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `Llevas ${puntos}`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `
    }

})

btnMundo.addEventListener("click",() => {

    if (document.getElementById('rusia').checked=== true){
        puntos+= 10
        Swal.fire({
            icon: 'success',
            title: 'Respuesta Correcta',
            text: `Ganaste 10 puntos`,
            footer: `Llevas ${puntos}`

        
        })
    divPuntos.innerHTML = `
    Puntos:
       ${puntos}
    `     
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `Llevas ${puntos}`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `
    }

})

btnEscritor.addEventListener("click",() => {

    if (document.getElementById('garcia_marquez').checked=== true){
        puntos+= 10
        Swal.fire({
            icon: 'success',
            title: 'Respuesta Correcta',
            text: `Ganaste 10 puntos`,
            footer: `Llevas ${puntos}`

        
        })
    divPuntos.innerHTML = `
    Puntos:
       ${puntos}
    `     
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `Llevas ${puntos}`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `
    }

})

btnOceano.addEventListener("click",() => {

    if (document.getElementById('pacifico').checked=== true){
        puntos+= 10
        Swal.fire({
            icon: 'success',
            title: 'Respuesta Correcta',
            text: `Ganaste 10 puntos`,
            footer: `Llevas ${puntos}`

        
        })
    divPuntos.innerHTML = `
    Puntos:
       ${puntos}
    `     
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `Llevas ${puntos}`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `
    }

})

btnMetal.addEventListener("click",() => {

    if (document.getElementById('aluminio').checked=== true){
        puntos+= 10
        Swal.fire({
            icon: 'success',
            title: 'Respuesta Correcta',
            text: `Ganaste 10 puntos`,
            footer: `Llevas ${puntos}`

        
        })
    divPuntos.innerHTML = `
    Puntos:
       ${puntos}
    `     
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `Llevas ${puntos}`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `
    }

})

btnLuna.addEventListener("click",() => {

    if (document.getElementById('yuri').checked=== true){
        puntos+= 10
        Swal.fire({
            icon: 'success',
            title: 'Respuesta Correcta',
            text: `Ganaste 10 puntos`,
            footer: `Llevas ${puntos}`

        
        })
    divPuntos.innerHTML = `
    Puntos:
       ${puntos}
    `     
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `Llevas ${puntos}`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `
    }

})

btnPais.addEventListener("click",() => {

    if (document.getElementById('italia').checked=== true){
        puntos+= 10
        Swal.fire({
            icon: 'success',
            title: 'Respuesta Correcta',
            text: `Ganaste 10 puntos`,
            footer: `Llevas ${puntos}`

        
        })
    divPuntos.innerHTML = `
    Puntos:
       ${puntos}
    `     
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            text: `Llevas ${puntos}`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `
    }

})