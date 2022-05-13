const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { LogInSchema, RegSchema } = require("../utilis/validation");
const User = require("../models/User.model");

const Register = async (req, res) => {
    
  const { value, error } = RegSchema.validate(req.body);
  console.log({ value });
  

  if (error) return res.status(400).json(error.message);

  let user = await User.findOne({ email: value.email });

  if (user) return res.status(400).json({ msg: "User already existd" });

  const hashedpassword = await bcrypt.hash(value.password, 10);

  user = await User.create({
    username: value.username,
    email: value.email,
    password: hashedpassword,
  });

  res.status(201).json(user);
};


const Login = async (req, res) => {
  const { value, error } = LogInSchema.validate(req.body);

  if (error) return res.status(400).json(error.msg);

  let user = await User.findOne({ email: value.email });

  if (!user) return res.status(400).json({ msg: "Invalid Credentials" });

  const isMatch = bcrypt.compare(value.password, user.password);

  if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" });

  

  const token = jwt.sign(
    { Id: user.Id, 
      username: user.username 
    }, 
    "secret",
    {
    expiresIn: "1hr",
    }
  );

  res.status(200).json(token);
};



module.exports = {
  Register,
  Login,
};
