const express = require("express");
require("./config.js");
const studentModel = require("./students.js");
const app = express();

app.use(express.json());

app.get("/fetch", async (req, res) => {
  let response = await studentModel.find();
  res.send(response);
});

app.post("/create", async (req, res) => {
  let response = await studentModel(req.body).save();
  if (response) {
    res.send("Data Inserted Successfully");
  }
});

app.put("/update/:name", async (req, res) => {
  let response = await studentModel.updateOne(
    { name: req.params.name },
    { $set: req.body }
  );
  if (response) {
    res.send("Data Updated Successfully");
  }
});

app.delete("/delete/:id", async (req, res) => {
  let response = await studentModel.findByIdAndDelete(req.params.id);
  if (response) {
    res.send("Data Deleted Successfully");
  }
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
