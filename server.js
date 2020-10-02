const express = require("express");
const app = express();
const connectDB = require("./config/db");
const path = require("path");

//connect database
connectDB();
//init middleware
app.use(express.json({ extended: false }));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use("/api/users", require("./routes/users"));
app.use("/api/contacts", require("./routes/contacts"));
app.use("/api/auth", require("./routes/auth"));

if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}
const PORT = process.env.PORT || 5000;
