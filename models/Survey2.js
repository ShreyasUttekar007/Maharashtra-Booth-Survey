const mongoose = require("mongoose");
const { Schema } = mongoose;

const surveySchema2 = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    district: {
      type: String,
      required: [true, "Please select a District"],
      trim: true,
    },
    constituencyName: {
      type: String,
      required: [true, "Please select a Constituency"],
      trim: true,
    },
    constituencyNumber: {
      type: String,
      required: [true, "Please select a Constituency"],
      trim: true,
    },
    boothName: {
      type: String,
      required: [true, "Please select a Booth"],
      trim: true,
    },
    boothNumber: {
      type: String,
      required: [true, "Please select a Booth"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Please select an Address"],
      trim: true,
    },
    partyName: {
      type: String,
      required: [true, "Please select a Party Name"],
      trim: true,
    },
    pramukhName: {
      type: String,
      trim: true,
    },
    contact: {
      type: String,
      trim: true,
    },
    photo: {
      type: String,
    },
    influentialLeadersName: {
      type: String,
      trim: true,
    },
    influentialLeadersCaste: {
      type: String,
      trim: true,
    },
    influentialLeadersContact: {
      type: String,
      trim: true,
    },
    influentialLeadersPhoto: {
      type: String,
    },
    influentialPersonsName: {
      type: String,
      trim: true,
    },
    influentialPersonsCaste: {
      type: String,
      trim: true,
    },
    influentialPersonsContact: {
      type: String,
      trim: true,
    },
    influentialPersonsRoi: {
      type: String,
      trim: true,
    },
    influentialPersonsPhoto: {
      type: String,
    },
    probableJoineesName: {
      type: String,
      trim: true,
    },
    probableJoineesCaste: {
      type: String,
      trim: true,
    },
    probableJoineesContact: {
      type: String,
      trim: true,
    },
    probableJoineesDesc: {
      type: String,
      trim: true,
    },
    probableJoineesPhoto: {
      type: String,
    },
    leadersDisgruntledName: {
      type: String,
      trim: true,
    },
    leadersDisgruntledCaste: {
      type: String,
      trim: true,
    },
    leadersDisgruntledContact: {
      type: String,
      trim: true,
    },
    leadersDisgruntledReason: {
      type: String,
      trim: true,
    },
    leadersDisgruntledPhoto: {
      type: String,
    },
  },
  { timestamps: true }
);

const Survey = mongoose.model("Survey", surveySchema2);

module.exports = Survey;
