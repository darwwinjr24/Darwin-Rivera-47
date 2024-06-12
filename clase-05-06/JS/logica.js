console.log('logica conectada')

const usuario= 'admin'
const contraseña= '1234'

function pruebaBoton(){
let user= document.getElementById('user').value
let pw= document.getElementById('pw').value
if(usuario==user&&contraseña==pw){
window.open('calculadora.html')
console.log(`Ingreso ok`)
}else{
    console.log(`Ingreso denegado`)
}
}

function n0(){
    document.getElementById('pantalla').value+=0
}

function n1(){
    document.getElementById('pantalla').value+=1
}

function n2(){
    document.getElementById('pantalla').value+=2
}

function n3(){
    document.getElementById('pantalla').value+=3
}

function n4(){
    document.getElementById('pantalla').value+=4
}
function n5(){
    document.getElementById('pantalla').value+=5
}

function n6(){
    document.getElementById('pantalla').value+=6
}

function n7(){
    document.getElementById('pantalla').value+=7
}

function n8(){
    document.getElementById('pantalla').value+=8
}

function n9(){
    document.getElementById('pantalla').value+=9
}