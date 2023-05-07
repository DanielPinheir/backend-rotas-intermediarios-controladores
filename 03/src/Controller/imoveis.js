const imoveis = require("../Data/bancoDeDados");

const propertyList = (req, res) => {
  res.send(imoveis);
};

const filterProperty = (req, res) => {
  const { id } = req.params;
  const property = imoveis.find((property) => property.id === Number(id));
  if (property) {
    res.send(property);
  }
};

module.exports = {
  propertyList,
  filterProperty,
};
