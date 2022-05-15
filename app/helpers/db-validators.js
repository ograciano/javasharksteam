// const { Categoria, Producto, Usuario, Role } = require("../models");


// const esRoleValido = async (rol = '') => {
//     const existeRole = await Role.findOne({ role: rol });
//     if (!existeRole) {
//         throw new Error(`El role ${rol} no esta registrado en la base de datos`);
//     }
// }

// const existEmail = async (correo = '') => {
//     const existeEmail = await Usuario.findOne({ correo });
//     if (existeEmail) {
//         throw new Error(`este correo: ${correo} ya esta registrado`)
//     }
// }

// const existUsuario = async (id) => {
//     const existeUsuario = await Usuario.findById(id);
//     if (!existeUsuario) {
//         throw new Error(`El ID no existe: ${id}`)
//     }
// }

// const existCategoria = async (id) => {
//     const existeCategoria = await Categoria.findById(id);
//     if (!existeCategoria) {
//         throw new Error(`El ID no existe: ${id}`)
//     }
// }

// const existProducto = async (id) => {
//     const existeProducto = await Producto.findById(id);
//     if (!existeProducto) {
//         throw new Error(`El ID no existe: ${id}`)
//     }
// }

const tablasPermitidas = (tabla = '', tablas = []) => {
    const incluida = tablas.includes(tabla);

    if(!incluida){
        throw new Error(`La tabla ${tabla} no esta permitida en ${tablas}`);
    }

    return true;
}

module.exports = {
    // esRoleValido,
    // existEmail,
    // existUsuario,
    // existCategoria,
    // existProducto,
    tablasPermitidas
}