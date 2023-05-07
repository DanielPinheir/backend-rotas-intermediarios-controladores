const express = require("express");

const router = express.Router();

const { propertyList, filterProperty } = require("../Controller/imoveis");

router.get("/imoveis", propertyList);

router.get("/imoveis/:id", filterProperty);

module.exports = router;
