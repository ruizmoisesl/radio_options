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

let preguntas= document.querySelector('.preguntas');
let preguntas1= document.querySelector('.preguntas1');
let preguntas2= document.querySelector('.preguntas2');
let preguntas3= document.querySelector('.preguntas3');
let preguntas4= document.querySelector('.preguntas4');
let preguntas5= document.querySelector('.preguntas5');
let preguntas6= document.querySelector('.preguntas6');
let preguntas7= document.querySelector('.preguntas7');
let preguntas8= document.querySelector('.preguntas8');
let preguntas9= document.querySelector('.preguntas9');

document.addEventListener('DOMContentLoaded', () => {
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `
})


let puntos= 0
let intentos= 1

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
    `,
    
    preguntas.innerHTML= `

    <strong>1. ¿Cuál es el río más largo del mundo? </strong>

    <input checked reandonly type="radio" name="rio" id="Nilo" value="nilo"><label for="">Nilo</label>
    <input type="radio" reandonly name="rio" id="Amazonas" value="amazonas"><label for="">Amazonas</label>
    <input type="radio" reandonly name="rio" id="Misisipi" value="misisipi"><label for="">Misisipi</label>
    <input type="radio" reandonlyname="rio" id="Yangtsé" value="yangtsé"><label for="">Yangtsé</label>

    
    `

    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `La respuesta correcta era: Nilo`
          })


        divPuntos.innerHTML= `
        Puntos:
        ${puntos}
        `,

        preguntas.innerHTML= `

        <strong>1. ¿Cuál es el río más largo del mundo? </strong>
    
        <input checked reandonly type="radio" name="rio" id="Nilo" value="nilo"><label for="">Nilo</label>
        <input type="radio" reandonly name="rio" id="Amazonas" value="amazonas"><label for="">Amazonas</label>
        <input type="radio" reandonly name="rio" id="Misisipi" value="misisipi"><label for="">Misisipi</label>
        <input type="radio" reandonly name="rio" id="Yangtsé" value="yangtsé"><label for="">Yangtsé</label>
    
        
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
    `,
    preguntas1.innerHTML=`
    <strong>2. ¿Quién pintó "La última cena"? </strong>
        <input checked type="radio"  name="pintura" id="davinci" value="davinchi"><label for="">Leonardo Davinci</label>
        <input type="radio"  name="pintura" id="picasso" value="picasso"><label for="">Pablo Picasso</label>
        <input type="radio"  name="pintura" id="vanGogh" value="vanGogh"><label for="">Vincent Van Gogh</label>
        <input type="radio"  name="pintura" id="michelangelo" value="michelangelo"><label for="">Michelangelo</label>
    
    `


    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `La respuesta correcta era: Leonardo Davinci`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `,
    preguntas1.innerHTML=`
    <strong>2. ¿Quién pintó "La última cena"? </strong>
        <input  checked type="radio"  name="pintura" id="davinci" value="davinchi"><label for="">Leonardo Davinci</label>
        <input type="radio"  name="pintura" id="picasso" value="picasso"><label for="">Pablo Picasso</label>
        <input type="radio"  name="pintura" id="vanGogh" value="vanGogh"><label for="">Vincent Van Gogh</label>
        <input type="radio"  name="pintura" id="michelangelo" value="michelangelo"><label for="">Michelangelo</label>
    
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
    `,

    preguntas2.innerHTML=`

    <strong>3. ¿Cuál es la capital de Australia? </strong>
        <input type="radio" name="capital" id="sidney" value="sidney"><label for="">Sidney</label>
        <input checked type="radio" name="capital" id="canberra" value="canberra"><label for="">Canberra</label>
        <input type="radio" name="capital" id="melbourne" value="misisipi"><label for="">Melbourne</label>
        <input type="radio" name="capital" id="brisbane" value="brisbane"><label for="">Brisbane</label>


    `
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `La respuesta correcta era: Canberra`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `,

    preguntas2.innerHTML=`

    <strong>3. ¿Cuál es la capital de Australia? </strong>
        <input type="radio" name="capital" id="sidney" value="sidney"><label for="">Sidney</label>
        <input checked type="radio" name="capital" id="canberra" value="canberra"><label for="">Canberra</label>
        <input type="radio" name="capital" id="melbourne" value="misisipi"><label for="">Melbourne</label>
        <input type="radio" name="capital" id="brisbane" value="brisbane"><label for="">Brisbane</label>


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
    `,

    preguntas3.innerHTML=`
        <strong>4.¿Qué famoso científico formuló la teoría de la relatividad? </strong>
        <input type="radio" name="cientifica" id="newton" value="newton"><label for="">Isaac Newton</label>
        <input checked type="radio" name="cientifica" id="einstein" value="einstein"><label for="">Albert Einstein</label>
        <input type="radio" name="cientifica" id="galileo" value="galileo"><label for="">Galileo Galilei</label>
        <input type="radio" name="cientifica" id="darwin" value="darwin"><label for="">Charles Darwin</label>


    `
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `La Respuesta correcta era: Alber Einstein`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `,

    preguntas3.innerHTML=`

        <strong>4.¿Qué famoso científico formuló la teoría de la relatividad? </strong>
        <input type="radio" name="cientifica" id="newton" value="newton"><label for="">Isaac Newton</label>
        <input checked type="radio" name="cientifica" id="einstein" value="einstein"><label for="">Albert Einstein</label>
        <input type="radio" name="cientifica" id="galileo" value="galileo"><label for="">Galileo Galilei</label>
        <input type="radio" name="cientifica" id="darwin" value="darwin"><label for="">Charles Darwin</label>


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
    `,

    preguntas4.innerHTML=`
        <strong>5. ¿Cuál es el país más grande del mundo en términos de superficie terrestre? </strong>
        <input checked type="radio" name="pais" id="rusia" value="rusia"><label for="">Rusia</label>
        <input type="radio" name="pais" id="canada" value="canada"><label for="">Canadá</label>
        <input type="radio" name="pais" id="usa" value="usa"><label for="">Estados Unidos</label>
        <input type="radio" name="pais" id="china" value="china"><label for="">China</label>
    
    `
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `La respuesta correcta era: Rusia`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `,

    preguntas4.innerHTML=`
        <strong>5. ¿Cuál es el país más grande del mundo en términos de superficie terrestre? </strong>
        <input checked type="radio" name="pais" id="rusia" value="rusia"><label for="">Rusia</label>
        <input type="radio" name="pais" id="canada" value="canada"><label for="">Canadá</label>
        <input type="radio" name="pais" id="usa" value="usa"><label for="">Estados Unidos</label>
        <input type="radio" name="pais" id="china" value="china"><label for="">China</label>
    
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
    `,

    preguntas5.innerHTML=`
        <strong>6. ¿Cuál de los siguientes escritores es autor de "Cien años de soledad"? </strong>
        <input checked type="radio" name="escritor" id="garcia_marquez" value="garcia_marquez"><label for="">Gabriel Garcia Marquez</label>
        <input type="radio" name="escritor" id="vargas_llosa" value="vargas_llosa"><label for="">Mario Vargas Llosa</label>
        <input type="radio" name="escritor" id="cortazar" value="cortazar"><label for="">Julio Cortázar</label>
        <input type="radio" name="escritor" id="allebe" value="allebe"><label for="">Isabel Allebe</label>

    
    `
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `La respuesta correcta era Gabriel Garcia Marquez`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `,

    preguntas5.innerHTML=`
        <strong>6. ¿Cuál de los siguientes escritores es autor de "Cien años de soledad"? </strong>
        <input checked type="radio" name="escritor" id="garcia_marquez" value="garcia_marquez"><label for="">Gabriel Garcia Marquez</label>
        <input type="radio" name="escritor" id="vargas_llosa" value="vargas_llosa"><label for="">Mario Vargas Llosa</label>
        <input type="radio" name="escritor" id="cortazar" value="cortazar"><label for="">Julio Cortázar</label>
        <input type="radio" name="escritor" id="allebe" value="allebe"><label for="">Isabel Allebe</label>

    
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
    `,
    
    preguntas6.innerHTML=`
        <strong>7. ¿Cuál es el océano más grande del mundo? </strong>
        <input  checked type="radio" name="oceano" id="atlantico" value="atlantico"><label for="">Oceano Atlantico</label>
        <input type="radio" name="oceano" id="indico" value="indico"><label for="">Oceano Indico</label>
        <input type="radio" name="oceano" id="artico" value="artico"><label for="">Oceano Artico</label>
        <input type="radio" name="oceano" id="pacifico" value="pacifico"><label for="">Oceano Pacifico</label>

    
    `
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `La respuesta correcta era: Oceano Pacifico`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `,
    
    preguntas6.innerHTML=`
        <strong>7. ¿Cuál es el océano más grande del mundo? </strong>
        <input  checked type="radio" name="oceano" id="atlantico" value="atlantico"><label for="">Oceano Atlantico</label>
        <input type="radio" name="oceano" id="indico" value="indico"><label for="">Oceano Indico</label>
        <input type="radio" name="oceano" id="artico" value="artico"><label for="">Oceano Artico</label>
        <input type="radio" name="oceano" id="pacifico" value="pacifico"><label for="">Oceano Pacifico</label>

    
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
    `,

    preguntas7.innerHTML=`
        <strong>8. ¿Cuál es el metal más abundante en la corteza terrestre? </strong>
        <input type="radio" name="metal" id="hierro" value="hierro"><label for="">Hierro</label>
        <input checked type="radio" name="metal" id="aluminio" value="aluminio"><label for="">Aluminio</label>
        <input type="radio" name="metal" id="cobre" value="cobre"><label for="">Cobre</label>
        <input type="radio" name="metal" id="plomo" value="plomo"><label for="">Plomo</label>
    
    `
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `La respuesta correcta era: Aluminio`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `,

    preguntas7.innerHTML=`
        <strong>8. ¿Cuál es el metal más abundante en la corteza terrestre? </strong>
        <input type="radio" name="metal" id="hierro" value="hierro"><label for="">Hierro</label>
        <input checked type="radio" name="metal" id="aluminio" value="aluminio"><label for="">Aluminio</label>
        <input type="radio" name="metal" id="cobre" value="cobre"><label for="">Cobre</label>
        <input type="radio" name="metal" id="plomo" value="plomo"><label for="">Plomo</label>
    
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
    `,

    preguntas8.innerHTML=`
        <strong>9. ¿Quién fue el primer ser humano en viajar al espacio?</strong>
        <input checked type="radio" name="luna" id="yuri" value="yuri"><label for="">Yuri Gagarin</label>
        <input type="radio" name="luna" id="neil" value="neil"><label for="">Neil Armstrong</label>
        <input type="radio" name="luna" id="john" value="john"><label for="">John Glenn</label>
        <input type="radio" name="luna" id="buzz" value="buzz"><label for="">Buzz Aldrin</label>
    `
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: `La respuesta correcta era: Yuri Gagarin`
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `,

    preguntas8.innerHTML=`
        <strong>9. ¿Quién fue el primer ser humano en viajar al espacio?</strong>
        <input checked type="radio" name="luna" id="yuri" value="yuri"><label for="">Yuri Gagarin</label>
        <input type="radio" name="luna" id="neil" value="neil"><label for="">Neil Armstrong</label>
        <input type="radio" name="luna" id="john" value="john"><label for="">John Glenn</label>
        <input type="radio" name="luna" id="buzz" value="buzz"><label for="">Buzz Aldrin</label>
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
    `,
    
    preguntas9.innerHTML=`
        <strong>10. ¿En qué país se encuentra la famosa torre inclinada de Pisa? </strong>
        <input checked type="radio" name="torre" id="italia" value="italia"><label for="">Italia</label>
        <input type="radio" name="torre" id="españa" value="españa"><label for="">España</label>
        <input type="radio" name="torre" id="francia" value="francia"><label for="">Francia</label>
        <input type="radio" name="torre" id="grecia" value="grecia"><label for="">Grecia</label>
    `
    }

    else{
        puntos-=5
        Swal.fire({
            icon: 'error',
            title: 'Respuesta Incorrecta',
            text: `Perdiste 5 puntos`,
            footer: 'La respuesta correcta era: Italia'
          })
    divPuntos.innerHTML= `
    Puntos:
      ${puntos}
    `,
    
    preguntas9.innerHTML=`
        <strong>10. ¿En qué país se encuentra la famosa torre inclinada de Pisa? </strong>
        <input checked type="radio" name="torre" id="italia" value="italia"><label for="">Italia</label>
        <input type="radio" name="torre" id="españa" value="españa"><label for="">España</label>
        <input type="radio" name="torre" id="francia" value="francia"><label for="">Francia</label>
        <input type="radio" name="torre" id="grecia" value="grecia"><label for="">Grecia</label>
    `

    }

})