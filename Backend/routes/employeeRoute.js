const express = require("express");
const router = express.Router();

const {
  createEmployee,
  getAllEmployees,
} = require("../controllers/employeeController");

router.get("/empList", getAllEmployees);
router.post("/createEmp", createEmployee);

module.exports = router;
