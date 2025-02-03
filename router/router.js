const express = require("express");
const router = express.Router();
const companyRouter = require("./company.router");

router.use("/companies", companyRouter);

module.exports = router;
