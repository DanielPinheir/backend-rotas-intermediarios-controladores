const sumTwoNumbers = (req, res) => {
  const { num1, num2 } = req.query;
  let resultado = "";

  if (num1 && num2) {
    resultado = Number(num1) + Number(num2);
    res.send(String(resultado));
  }

  resultado = "Não existem números suficientes para realizar esta operação.";
  res.send(resultado);
};

const subtractTwoNumbers = (req, res) => {
  const { num1, num2 } = req.query;
  let resultado = "";

  if (num1 && num2) {
    resultado = Number(num1) - Number(num2);
    res.send(String(resultado));
  }

  resultado = "Não existem números suficientes para realizar esta operação.";
  res.send(resultado);
};

const multiplyTwoNumbers = (req, res) => {
  const { num1, num2 } = req.query;
  let resultado = "";

  if (num1 && num2) {
    resultado = Number(num1) * Number(num2);
    res.send(String(resultado));
  }

  resultado = "Não existem números suficientes para realizar esta operação.";
  res.send(resultado);
};

const divideTwoNumbers = (req, res) => {
  const { num1, num2 } = req.query;
  let resultado = "";

  if (num1 && num2) {
    resultado = Number(num1) / Number(num2);
    res.send(String(resultado));
  }

  resultado = "Não existem números suficientes para realizar esta operação.";
  res.send(resultado);
};

module.exports = {
  sumTwoNumbers,
  subtractTwoNumbers,
  multiplyTwoNumbers,
  divideTwoNumbers,
};
