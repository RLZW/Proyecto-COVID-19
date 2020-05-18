const path = require("path");
const Paciente = require('../models/modelo_datos');

exports.getAgregarPaciente = (req, res) => {
    console.log("AQUI SE CORRE AGREGAR PACIENTE");
    res.sendFile(path.join(__dirname, '../views', 'alta.html'));
};

exports.postAgregarPaciente = (req, res) => {
    console.log(req.body);
    console.log("TRATANDO DE SUBIR");
    let data = req.body;
    let paciente = new Paciente(
        data.nombre,
        data.edad,
        data.genero,
        data.seguridad_social,
        data.dolor_garganta,
        data.tos_seca,
        data.fiebre,
        data.dif_respirar,
        data.diabetes,
        data.hipertension,
        data.sobrepeso);
    
    
        console.log(JSON.stringify(paciente));
    paciente.save()
        .then(() => {
            console.log('Paciente registrado exitosamente');
            res.redirect('/confirmacion');
        })
        .catch((err) => {
            console.log("ERROR ETERNO");
            console.log(err);
            res.send('Error');
        });

};

exports.getConfirmacion = (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'confirmacion.html'));
};

exports.getPacientes = (req, res) => {
    Paciente.findAll()
        .then(([rows, fields]) => {
            res.render("pacientes.html", {
                pacientes: rows,
            });
        })
        .catch(err => console.log(err));
};

