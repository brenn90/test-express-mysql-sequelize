const express = require("express");
const cors = require("cors");
const app = express();

// cors config
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));

// body-parser config
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db config
const db = require("./models");
db.sequelize.sync({ force: true });

// routes config
app.use('/api/students', require("./routes/student.routes"))
app.use('/api/scores', require("./routes/score.routes"))

app.get("/", (req, res) => {
  res.json({ message: "Welcome to students portal." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});