const express = require('express');
const router = express.Router();
const pacienteControlador = require('../controllers/controlador_pacientes');
const inicioControlador = require('../controllers/inicio');

router.get('/', inicioControlador.getInicio);
router.get('/lista-pacientes', pacienteControlador.getPacientes);
router.post('/agregarPaciente', pacienteControlador.postAgregarPaciente);
router.get('/alta-paciente', pacienteControlador.getAgregarPaciente);
router.get('/confirmacion', pacienteControlador.getConfirmacion);

module.exports = router;
