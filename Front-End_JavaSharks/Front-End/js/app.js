const prod = 'https://javasharkteam.azurewebsites.net';
const dev = 'http://localhost:8080';
const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('name').value;
    const correo = document.getElementById('correo').value;
    const direc = document.getElementById('direc').value;
    const desc = document.getElementById('desc').value;
    const motivo = document.getElementById('motivo').value;
    const archivo = document.getElementById('archivo').files[0];

    const dataPost = {
        nombre,
        correo,
        motivo,
        direccion: direc,
        descripcion: desc,
    }

    const response = await fetch(`${prod}/api/v1/denuncias`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(dataPost)
    });
    const denuncia = await response.json();
    alert(denuncia.message);
    
    if(archivo){
        console.log(archivo);
        let formData = new FormData();
        formData.append('archivo', archivo);
        const id = denuncia.id;
        const response = await fetch(`${prod}/api/v1/uploads/denuncias/${id}`, {
            method: 'PUT',
            headers: {
                // 'Content-Type': 'multipart/form-data'
            },
            body: formData
        });
        const denunciaActualizada = await response.json();
        console.log(response);
        console.log(denunciaActualizada);
    }
});