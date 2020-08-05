// Entery point to our backend
const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the contact keeper API" })
);

// Define routes
app.use("/api/users", require("./routes/users")); // Every API dealing with the users would start with this route
app.use("/api/auth", require("./routes/auth")); // Every API dealing with the auth would start with this route
app.use("/api/contacts", require("./routes/contacts")); // Every API dealing with the contacts would start with this route

// This will first look for environment variable called PORT(will be used in production) or use the port 5000(will be used in development)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
