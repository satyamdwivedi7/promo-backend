const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  industry: {
    type: String,
    enum: [
      "Technology",
      "Finance",
      "Health",
      "Education",
      "Agriculture",
      "Others",
    ],
    required: true,
  },
  service: {
    type: String,
    enum: ["Product based", "Service based", "Product and Service based"], // Corrected typo here
    required: true,
  },
  whatProduct: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    enum: ["Banglore", "Chennai", "Vellore"],
    required: true,
  },
  socialMedia: {
    type: String,
    enum: ["Yes", "No"],
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  competitors: {
    type: String,
    required: true,
  },
  usp: {
    type: String,
    required: true,
  },
  currentMarketting: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
