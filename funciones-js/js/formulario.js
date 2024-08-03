const formLogin = document.getElementById('formLogin')

const login = () => {
    //alert('Bienvenido ADMIN')

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    //let form = document.getElementById('formLogin')

    // email = ''
    // password = ''

    console.log(email)
    console.log(password)

    let email1 = 'pepe'
    let nombre1 = 'Pedro'
    let password1 = '123123'

    if (email == email1 && password == password1) {
        localStorage.setItem('Nombre', nombre1);
        location.href = './admin.html'
    } else if (email == '' || password == ''){
        //alert('Ingrese los datos solicitados')
        //location.href = './formulario.html'
    } else {
        location.href = './error.html'
    } 

    // Resetear los valores del formulario
    formLogin.reset()

}

formLogin.addEventListener('click', (e) => {
    e.preventDefault() // Previene que se ejecute el evento antes del click

    console.log(e);

    console.log(e.target.email.value);
    console.log(e.target.password.value);

    //alert('Click')
})