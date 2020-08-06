const jwt = require("jsonwebtoken");
const config = require("config");

// This function is made for the protected routes which can't be accessed if user is not yet logged in.
module.exports = function (req, res, next) {
  // Get the token from the header
  const token = req.header("x-auth-token");
  // In case of 'x-auth-token' user has to supply username/password for the first time and server returns a
  // access-token in header field 'x-auth-token'. For further sessions this token is exchanged, not the username/password.

  // Check if it doesn't exist so the user is not yet logged in
  if (!token) {
    // 401 - unauthorized
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  // If token exist then verify the toekn
  try {
    // token payload is returned ie once it is verified the payload is put into the decoded
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
