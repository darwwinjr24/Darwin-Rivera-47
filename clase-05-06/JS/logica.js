console.log('logica conectada')

const usuario = 'admin'
const contraseña = '1234'

function pruebaBoton() {
    let user = document.getElementById('user').value
    let pw = document.getElementById('pw').value
    if (usuario == user && contraseña == pw) {
        window.open('calculadora.html')
        console.log(`Ingreso ok`)
    } else {
        console.log(`Ingreso denegado`)
    }
}

function n0() {
    document.getElementById('pantalla').value += 0
}

function n1() {
    document.getElementById('pantalla').value += 1
}

function n2() {
    document.getElementById('pantalla').value += 2
}

function n3() {
    document.getElementById('pantalla').value += 3
}

function n4() {
    document.getElementById('pantalla').value += 4
}
function n5() {
    document.getElementById('pantalla').value += 5
}

function n6() {
    document.getElementById('pantalla').value += 6
}

function n7() {
    document.getElementById('pantalla').value += 7
}

function n8() {
    document.getElementById('pantalla').value += 8
}

function n9() {
    document.getElementById('pantalla').value += 9
}

function suma() {
    sumas()
    document.getElementById('pantalla').value += '+'
}

function sumas(){
    let operacion= document.getElementById('pantalla').value
    let partes = operacion.split("+")
    let acumuladorDeSumas = parseFloat(partes[0].trim());
    for (let i = 1; i < partes.length; i++) {
        acumuladorDeSumas += parseFloat(partes[i].trim());
        console.log(acumuladorDeSumas)
        document.getElementById('resultado').innerHTML=acumuladorDeSumas
    }
}
function resta() {
    restas()
    document.getElementById('pantalla').value += '-'
}

function restas(){
    let operacion= document.getElementById('pantalla').value
    let partes = operacion.split("-");
    let resultadoResta= parseFloat(partes[0].trim());
    for (let i = 1; i < partes.length; i++) {
        resultadoResta-= parseFloat(partes[i].trim());
        console.log(resultadoResta)
        document.getElementById('resultado').innerHTML=resultadoResta
    }
}

function multiplicacion() {
    multiplicaciones()
    document.getElementById('pantalla').value += '*'
}

function multiplicaciones(){
    let operacion= document.getElementById('pantalla').value
    let partes = operacion.split("*");
    let resultadoMultiplicacion= parseFloat(partes[0].trim());
    for (let i = 1; i < partes.length; i++) {
        resultadoMultiplicacion*= parseFloat(partes[i].trim());
        console.log(resultadoMultiplicacion)
        document.getElementById('resultado').innerHTML=resultadoMultiplicacion
    }
}


function division() {
    divisiones()
    document.getElementById('pantalla').value += '/'
}

function divisiones(){
    let operacion= document.getElementById('pantalla').value
    let partes = operacion.split("/");
    let resultadoDivisiones= parseFloat(partes[0].trim());
    for (let i = 1; i < partes.length; i++) {
        resultadoDivisiones/= parseFloat(partes[i].trim());
        console.log(resultadoDivisiones)
        document.getElementById('resultado').innerHTML=resultadoDivisiones
    }
}

function borrar() {
    document.getElementById('pantalla').value = ''
    document.getElementById('pantalla').focus()
    document.getElementById('resultado').innerHTML= ''
}

function cerrar() {
    window.close('calculadora.html')
}



function igual() {
    if(sumas()=='+'){       
}else{
}
if(restas()=='-'){     
}else{
}
if(multiplicaciones()=='*'){      
}else{
}
if(divisiones()=='/'){      
}else{
}
}