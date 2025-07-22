const express = require("express");
const mongoose = require("mongoose");

const app = express();

// All Routes:
const empRoute = require("./routes/employeeRoute");

app.use(express.json());
app.use("/api/emp", empRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
