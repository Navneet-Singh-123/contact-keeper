// Entery point to our backend
const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect Database
connectDB();

// Init Middleware
// By doing this we can except body data
app.use(express.json({ extended: false }));

// Define routes
app.use("/api/users", require("./routes/users")); // Every API dealing with the users would start with this route
app.use("/api/auth", require("./routes/auth")); // Every API dealing with the auth would start with this route
app.use("/api/contacts", require("./routes/contacts")); // Every API dealing with the contacts would start with this route

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

// This will first look for environment variable called PORT(will be used in production) or use the port 5000(will be used in development)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
