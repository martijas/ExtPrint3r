const express = require("express");
const path = require("path");
const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname)));

// Route to serve the main HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});


app.listen(8000, "0.0.0.0", () => {
  console.log("http://0.0.0.0:8000");
});
