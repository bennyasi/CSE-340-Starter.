const express = require("express");
const path = require("path");

const app = express();

// View engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // ✅ correct folder

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Route
app.get("/", (req, res) => {
  res.render("index", { title: "CSE Motors" });
});

// Server (Render-safe)
const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
