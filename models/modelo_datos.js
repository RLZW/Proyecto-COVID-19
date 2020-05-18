const db = require('../util/database');

module.exports = class Paciente {
    constructor(nombre, edad, genero, seguridad_social, dolor_garganta, tos_seca, fiebre, dif_respirar, diabetes, hipertension, sobrepeso) {
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.genero = genero;
        this.seguridad_social = seguridad_social;
        this.dolor_garganta = dolor_garganta == 'Si';
        this.tos_seca = tos_seca == 'Si';
        this.fiebre = fiebre == 'Si';
        this.dif_respirar = dif_respirar == 'Si';
        this.diabetes = diabetes == 'Si';
        this.hipertension = hipertension == 'Si';
        this.sobrepeso = sobrepeso == 'Si'
    }

    save() {
        return db.query('INSERT INTO paciente(id_paciente, nombre , edad ,genero , seguridad_social , dolor_garganta , tos_seca , fiebre, dif_respirar, diabetes ,hipertension ,sobrepeso )  VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
            [null, this.nombre, this.edad, this.genero, this.seguridad_social, this.dolor_garganta, this.tos_seca, this.fiebre, this.dif_respirar, this.diabetes, this.hipertension, this.sobrepeso]);
    }


    static findAll() {
        return db.execute('SELECT * FROM paciente');
    }


}