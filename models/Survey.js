const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    district: {
      type: String,
      required: [true, "Please enter a district"],
      trim: true,
    },
    constituency: {
      type: String,
      required: [true, "Please enter a constituency"],
      trim: true,
    },
    booth: {
      type: String,
      required: [true, "Please enter a booth"],
      trim: true,
    },
    locality: {
      type: String,
      required: [true, "Please enter a locality"],
      trim: true,
    },
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
    boothNumber: {
      type: String,
      trim: true,
    },
    pollingStationName: {
      type: String,
      trim: true,
    },
    shivsenaBoothPramukhName: {
      type: String,
      trim: true,
    },
    shivsenaBoothPramukhContact: {
      type: String,
      trim: true,
    },
    shsBoothPramukhPhoto: {
      type: String,
    },
    bjpBoothPramukhContact: {
      type: String,
      trim: true,
    },
    ubtBoothPramukhName: {
      type: String,
      trim: true,
    },
    ubtBoothPramukhContact: {
      type: String,
      trim: true,
    },
    incBoothPramukhName: {
      type: String,
      trim: true,
    },
    incBoothPramukhContact: {
      type: String,
      trim: true,
    },
    ncpApBoothPramukhName: {
      type: String,
      trim: true,
    },
    ncpApBoothPramukhContact: {
      type: String,
      trim: true,
    },
    ncpSpBoothPramukhName: {
      type: String,
      trim: true,
    },
    ncpSpBoothPramukhContact: {
      type: String,
      trim: true,
    },
    mnsBoothPramukhName: {
      type: String,
      trim: true,
    },
    mnsBoothPramukhContact: {
      type: String,
      trim: true,
    },
    otherPartyName: {
      type: String,
      trim: true,
    },
    otherPartyBoothPramukhName: {
      type: String,
      trim: true,
    },
    otherPartyBoothPramukhContact: {
      type: String,
      trim: true,
    },
    casteComposition: {
      type: String,
      trim: true,
    },
    influentialLeaders: {
      type: String,
      trim: true,
    },
    influentialPersons: {
      type: String,
      trim: true,
    },
    probableJoinees: {
      type: String,
      trim: true,
    },
    leadersDisgruntledWithShivsena: {
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

module.exports = mongoose.model("Survey", surveySchema);
