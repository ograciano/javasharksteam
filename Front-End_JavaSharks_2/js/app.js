ready = () => {
    console.log('hola mundo');

    const subirDatos = (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre");
        const apellido = document.getElementById("apellido");
        console.log(nombre, apellido);
    }

}


ready();