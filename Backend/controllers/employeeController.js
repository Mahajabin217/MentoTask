const Employee = require("../modal/Employee");

//Create employee:
exports.createEmployee = async (req, res) => {
  try {
    const { empId, empName, empSkills } = req.body;
    const emp = new Employee({ empId, empName, empSkills });
    await emp.save();
    res.json(emp);
  } catch (error) {
    console.log("Error creating employee:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Get all employee:
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    console.log("Error fetching employees:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
