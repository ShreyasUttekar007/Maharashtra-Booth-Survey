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
    locality: {
      type: String,
      required: [true, "Please select a Locality"],
      trim: true,
    },

    urbanData: urbanSchema,
    ruralData: ruralSchema,

    currentMlaPerception: {
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
    genBrahmin: { type: String, trim: true },
    genMaratha: { type: String, trim: true },
    genJain: { type: String, trim: true },
    genSindhi: { type: String, trim: true },
    genMarwadi: { type: String, trim: true },
    genBaniya: { type: String, trim: true },
    genGujrati: { type: String, trim: true },
    genOther: { type: String, trim: true },
    obcKunbi: { type: String, trim: true },
    muslim: { type: String, trim: true },
    obcDhangar: { type: String, trim: true },
    obcSutar: { type: String, trim: true },
    obcVanjari: { type: String, trim: true },
    obcBanjara: { type: String, trim: true },
    obcMali: { type: String, trim: true },
    obcTeli: { type: String, trim: true },
    obcNhavi: { type: String, trim: true },
    obcVani: { type: String, trim: true },
    obcKumbhar: { type: String, trim: true },
    obcLohar: { type: String, trim: true },
    obcRajput: { type: String, trim: true },
    obcDhobi: { type: String, trim: true },
    obcSonar: { type: String, trim: true },
    obcOther: { type: String, trim: true },
    scMahar: { type: String, trim: true },
    scMatang: { type: String, trim: true },
    scChambhar: { type: String, trim: true },
    scKurmi: { type: String, trim: true },
    scKori: { type: String, trim: true },
    scBalmiki: { type: String, trim: true },
    scDom: { type: String, trim: true },
    scPawar: { type: String, trim: true },
    scOther: { type: String, trim: true },
    stBhil: { type: String, trim: true },
    stKoli: { type: String, trim: true },
    stOther: { type: String, trim: true },
    stAndh: { type: String, trim: true },
    stPando: { type: String, trim: true },
    buddhist: { type: String, trim: true },
    minority: { type: String, trim: true },
    other: { type: String, trim: true },
  },
  { timestamps: true }
);

const UrbanSurvey = mongoose.model("UrbanSurvey", surveySchema);
const RuralSurvey = mongoose.model("RuralSurvey", surveySchema);

module.exports = { UrbanSurvey, RuralSurvey };
