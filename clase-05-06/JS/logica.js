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