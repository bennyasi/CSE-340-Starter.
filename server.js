const express = require("express");
const path = require("path");

const app = express();

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Route
app.get("/", (req, res) => {
  res.render("index", { title: "CSE Motors" });
});

// Server
const port = 5500;
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
