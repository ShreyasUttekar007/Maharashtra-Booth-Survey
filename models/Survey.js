const mongoose = require("mongoose");

const urbanSchema = new mongoose.Schema(
  {
    nagarPanchayat: {
      type: String,
      trim: true,
    },
    wardNo: {
      type: String,
      trim: true,
    },
    wardName: {
      type: String,
      trim: true,
    },
    corporatorName: {
      type: String,
      trim: true,
    },
    corporatorContact: {
      type: String,
      trim: true,
    },
    runnerUpCorporator: {
      type: String,
      trim: true,
    },
    runnerUpCorporatorContact: {
      type: String,
      trim: true,
    },
  },
  { _id: false }
);

const ruralSchema = new mongoose.Schema(
  {
    taluka: {
      type: String,
      trim: true,
    },
    zilaParishadGatt: {
      type: String,
      trim: true,
    },
    panchayatSamitiGann: {
      type: String,
      trim: true,
    },
    village: {
      type: String,
      trim: true,
    },
    sarpanch: {
      type: String,
      trim: true,
    },
    sarpanchContact: {
      type: String,
      trim: true,
    },
    runnerUpSarpanch: {
      type: String,
      trim: true,
    },
    runnerUpSarpanchContact: {
      type: String,
      trim: true,
    },
  },
  { _id: false }
);

const surveySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
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
    locality: {
      type: String,
      required: [true, "Please select a Locality"],
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

    urbanData: urbanSchema,
    ruralData: ruralSchema,

    influentialLeadersName: {
      type: String,
      trim: true,
    },
    influentialLeadersCaste: {
      type: String,
      trim: true,
    },
    influentialLeadersParty: {
      type: String,
      trim: true,
    },
    influentialLeadersContact: {
      type: String,
      trim: true,
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
    probableJoineesName: {
      type: String,
      trim: true,
    },
    probableJoineesCaste: {
      type: String,
      trim: true,
    },
    probableJoineesParty: {
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
    leadersDisgruntledWithShivsenaName: {
      type: String,
      trim: true,
    },
    leadersDisgruntledWithShivsenaCaste: {
      type: String,
      trim: true,
    },
    leadersDisgruntledWithShivsenaContact: {
      type: String,
      trim: true,
    },
    leadersDisgruntledWithShivsenaReason: {
      type: String,
      trim: true,
    },
    currentMlaPerception: {
      type: String,
      trim: true,
    },
    shsWin2019: {
      type: String,
      trim: true,
    },
    lsWin2019: {
      type: String,
      trim: true,
    },
    reasonForShsWinLoss: {
      type: String,
      trim: true,
    },
    shsOfficeExistence: {
      type: String,
      trim: true,
    },
    administrativeIssues: {
      type: String,
      trim: true,
    },
    suggestionsComplaints: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const UrbanSurvey = mongoose.model("UrbanSurvey", surveySchema);
const RuralSurvey = mongoose.model("RuralSurvey", surveySchema);

module.exports = { UrbanSurvey, RuralSurvey };
