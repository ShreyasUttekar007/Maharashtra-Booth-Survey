const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");
const Survey = require("../models/Survey");

const router = express.Router();

// User signup route
router.post("/signup", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const user = new User({ email, password });
    await user.save();
    const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
      expiresIn: "1d",
    });
    res.status(201).json({ message: "User created successfully", token });
  } catch (error) {
    next(error);
  }
});

// User login route
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    user.comparePassword(password, function (err, isMatch) {
      if (err) throw err;
      if (!isMatch) {
        return res.status(401).json({ message: "Authentication failed" });
      }
      const token = jwt.sign({ userId: user._id }, config.jwtSecret, {
        expiresIn: "1d",
      });
      const userObj = {
        name: user.name,
        email: user.email,
        _id: user._id,
        role: user.role,
      };
      console.log('userObj::: ', userObj);
      req.session.token = token;
      res.cookie("token", token, {
        maxAge: 36000000,
        sameSite: "none",
        secure: true,
        httpOnly: false,
      });
      res.send({ message: "Login success", userObj, token: token });
    });
  } catch (error) {
    next(error);
  }
});

router.post("/survey", authenticateToken, async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const surveyData = { ...req.body, userId: userId };

    const survey = new Survey(surveyData);
    const savedSurvey = await survey.save();

    res.status(201).json({ message: "Survey saved successfully", survey: savedSurvey });
  } catch (error) {
    next(error);
  }
});


function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Token not provided" });
  }

  jwt.verify(token.replace('Bearer ', ''), config.jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
    req.user = user;
    next();
  });
}

router.get("/get-survey", authenticateToken, async (req, res, next) => {
  try {
    const surveyData = await Survey.find();

    res.status(200).json({ surveys: surveyData });
  } catch (error) {
    next(error);
  }
});

router.get("/get-survey/:userId", authenticateToken, async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const surveyData = await Survey.find({ userId: userId });

    res.status(200).json({ surveys: surveyData });
  } catch (error) {
    next(error);
  }
});




module.exports = router;
