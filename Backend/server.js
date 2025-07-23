const express = require("express");
const mongoose = require("mongoose");

const app = express();

// All Routes:
const empRoute = require("./routes/employeeRoute");

const MONGO_URI = `mongodb+srv://<db_username>:<db_password>@cluster0.m0cbr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error(err));

app.use(express.json());
app.use("/api/emp", empRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
