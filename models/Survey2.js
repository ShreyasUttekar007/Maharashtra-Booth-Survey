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

const Survey = mongoose.model("Survey", surveySchema2);

module.exports = Survey;
