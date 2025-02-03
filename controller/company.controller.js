const Company = require("../models/company.model");

const createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).send(company);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find({});
    res.status(200).send(companies);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCompanyById = async (req, res) => {
  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).send();
    }
    res.status(200).send(company);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateCompanyById = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "industry",
    "service",
    "whatProduct",
    "location",
    "socialMedia",
    "website",
    "competitors",
    "usp",
    "currentMarketting",
    "email",
    "phone",
  ];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const company = await Company.findById(req.params.id);
    if (!company) {
      return res.status(404).send();
    }

    updates.forEach((update) => (company[update] = req.body[update]));
    await company.save();
    res.status(200).send(company);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteCompanyById = async (req, res) => {
  try {
    const company = await Company.findByIdAndDelete(req.params.id);
    if (!company) {
      return res.status(404).send();
    }
    res.status(200).send(company);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompanyById,
  deleteCompanyById,
};
