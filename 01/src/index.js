const express = require("express");
const {
  sumTwoNumbers,
  subtractTwoNumbers,
  multiplyTwoNumbers,
  divideTwoNumbers,
} = require("./Controller/operacoesMatematicas");

const app = express();

app.get("/somar", sumTwoNumbers);
app.get("/subtrair", subtractTwoNumbers);
app.get("/multiplicar", multiplyTwoNumbers);
app.get("/dividir", divideTwoNumbers);

app.listen(3000, () => {
  console.log("Iniciando servidor na porta 3000");
});
