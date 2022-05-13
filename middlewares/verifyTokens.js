const jwt = require("jsonwebtoken");

const VerifyToken = (req, res, next) => {
  //getting token from the headers.

  const tokenWithBearer = req.headers.authorization;

  if (!tokenWithBearer) {
    return res.status(403).json({ error: "Invalid Login Credentials" });
  }
  // split the headers to get actual token
  const token = tokenWithBearer.split("")[1];

  try {
    //verify the authenticity of the token
    const user = jwt.verify(token, "secret");

    //attach the user to the req
    req.user = user;
  } catch (error) {
    res.status(403).json({ error: "User not authenticated" });
  }
  next();
};

module.exports = {
  VerifyToken,
};
