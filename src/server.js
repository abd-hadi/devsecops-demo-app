const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../public")));

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    application: "devsecops-demo-app"
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Application running on port ${port}`);
});
