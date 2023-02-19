import { signupSchema } from "../models/signup.js";

const getSignupValues = async (req, res) => {
  const signupValues = await signupSchema.find();
  res.json(signupValues);
};

const postSignupValues = async (req, res) => {
  const checkUser = await signupSchema.findOne({ email: req.body.email });

  if (checkUser) {
    if (checkUser.password === req.body.password) {
      return res
        .status(401)
        .json({ message: "You already have an account. Please login!" });
    }
    return res
      .status(409)
      .json({ message: "Email already taken. Please use another email." });
  }

  const signupValue = new signupSchema({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    telephone: req.body.telephone,
    username: req.body.username,
  });

  await signupValue.save();
  res.status(200);
  res.json(signupValue);
};

const getSignupValue = async (req, res) => {
  try {
    const signupValue = await signupSchema.findOne({ _id: req.params.id });

    if (signupValue) {
      res.json(signupValue);
    } else {
      res.status(200);
    }
  } catch {
    res.status(404).json({ message: "User does not exist" });
  }
};

export { getSignupValue, postSignupValues, getSignupValues };
