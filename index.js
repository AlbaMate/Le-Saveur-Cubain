const express = require("express");
// una llamada de l'app, una instancia de l'app, iniciarla
const app = express();
//creo una function de callback cuando mi server este escuchando
// la barra me dice la route inicial(llamada middelewares) todo callback que seejucata luego de esa llamada tendra dos parametros
// req  => obtenemos la information que nos mandaron et con res => obtenemos una variable que nos permite responder
const estudiantesRoutes = require("./routes/estudiantesRoutes.js");
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.use("/estudiantes", estudiantesRoutes);

app.listen(6500, () => {
  console.log("active server");
});
