const express = require("express");
const bodyparser = require('body-parser');
const router = require("./routes/paciente_routes");
const errorControlador = require("./controllers/error");

var PORT = process.env.PORT || 8080;

const app = express();

app.engine("html", require("ejs").renderFile);

app.use(bodyparser.urlencoded({ extended: false }));

app.use(router);
app.use(errorControlador.getError);

app.listen(PORT, () => console.log('Funcando...'));
