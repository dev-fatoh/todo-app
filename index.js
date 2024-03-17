const express = require("express");
const app = express();
const port = 3000;
const db = require("./models");
const router = require("./routes/route");
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.static("public"));

app.use("/", router);
db.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
});
