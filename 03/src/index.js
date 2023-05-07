const express = require("express");
const propertyRouter = require("./Routes/roteador");

const app = express();

app.use("/", propertyRouter);

app.listen(8000, () => {
  console.log("Servidor inicializado na porta 8000");
});
