import mongoose, { Schema, model, models } from "mongoose";
import React from "react";

const applicationSchema = new Schema({
	firstname: String,
	lastname: String,
	email: String,
	dob: String,
	phone: String,

	loanamount: Number, // GBP
	loandur: Number, // Months
	loanpurpose: String,
	loantype: String,

	jobtitle: String,
	incomesource: String,
	incomemonthly: Number,

	expenses: Number,
	debt: Number,
	creditscore: Number,

	problems: [String],
});

const applicationModel =
	models.applications || model("applications", applicationSchema);

export default applicationModel;
