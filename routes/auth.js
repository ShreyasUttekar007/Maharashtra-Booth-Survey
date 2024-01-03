const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("../config");
const User = require("../models/User");
const Survey = require("../models/Survey2");
const { UrbanSurvey, RuralSurvey } = require("../models/Survey");

const router = express.Router();

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

function authenticateToken(req, res, next) {
  const token = req.headers["authorization"];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized: Token not provided" });
  }

  jwt.verify(token.replace("Bearer ", ""), config.jwtSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden: Invalid token" });
    }
    req.user = user;
    next();
  });
}

router.post("/survey", authenticateToken, async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const surveyData = { ...req.body, userId: userId };

    let SurveyModel;
    let survey;

    if (req.body.isUrban) {
      SurveyModel = UrbanSurvey;
      survey = new SurveyModel({
        ...surveyData,
        urbanData: { ...surveyData },
        ruralData: undefined,
      });
    } else {
      SurveyModel = RuralSurvey;
      survey = new SurveyModel({
        ...surveyData,
        urbanData: undefined,
        ruralData: { ...surveyData },
      });
    }

    const savedSurvey = await survey.save();

    res
      .status(201)
      .json({ message: "Survey saved successfully", survey: savedSurvey });
  } catch (error) {
    next(error);
  }
});

router.get("/get-survey", authenticateToken, async (req, res, next) => {
  try {
    const surveyData = await UrbanSurvey.find();

    res.status(200).json({ surveys: surveyData });
  } catch (error) {
    next(error);
  }
});

router.get("/get-survey/:userId", authenticateToken, async (req, res, next) => {
  try {
    const userId = req.params.userId;

    const urbanSurveyData = await UrbanSurvey.find({ userId: userId });
    const ruralSurveyData = await RuralSurvey.find({ userId: userId });

    const surveyData = urbanSurveyData.concat(ruralSurveyData);

    res.status(200).json({ surveys: surveyData });
  } catch (error) {
    next(error);
  }
});


router.post("/create-survey", authenticateToken, async (req, res, next) => {
  try {
    const userId = req.user.userId;
    const surveyData = { ...req.body, userId: userId };

    const survey = new Survey(surveyData);
    const savedSurvey = await survey.save();

    res
      .status(201)
      .json({ message: "Survey saved successfully", survey: savedSurvey });
  } catch (error) {
    next(error);
  }
});

router.get("/get-all-surveys", authenticateToken, async (req, res, next) => {
  try {
    const surveyData = await Survey.find();

    res.status(200).json({ surveys: surveyData });
  } catch (error) {
    next(error);
  }
});

router.get("/get-surveys/:userId", authenticateToken, async (req, res, next) => {
  try {
    const userId = req.params.userId;

    const userSurveys = await Survey.find({ userId: userId });

    res.status(200).json({ surveys: userSurveys });
  } catch (error) {
    next(error);
  }
});

router.put("/update-survey/:surveyId", authenticateToken, async (req, res, next) => {
  try {
    const surveyId = req.params.surveyId;
    const updatedSurvey = await Survey.findByIdAndUpdate(
      surveyId,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({ message: "Survey updated successfully", survey: updatedSurvey });
  } catch (error) {
    next(error);
  }
});

router.delete("/delete-survey/:surveyId", authenticateToken, async (req, res, next) => {
  try {
    const surveyId = req.params.surveyId;
    const deletedSurvey = await Survey.findByIdAndDelete(surveyId);

    res.status(200).json({ message: "Survey deleted successfully", survey: deletedSurvey });
  } catch (error) {
    next(error);
  }
});
module.exports = router;
