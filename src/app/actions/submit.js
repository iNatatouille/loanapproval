"use server";

import { redirect } from "next/navigation";
import connectDB from "../database/db";
import applicationModel from "../database/applicationModel";

export async function Submit(formObject) {
	let {
		firstname,
		lastname,
		email,
		dob,
		phone,

		loanamount,
		loandur,
		loanpurpose,
		loantype,

		jobtitle,
		incomesource,
		incomemonthly,

		expenses,
		debt,
		creditscore,
	} = formObject;

	const problems = [];

	debt = Number(debt);
	expenses = Number(expenses);
	incomemonthly = Number(incomemonthly);

	// Check to see if debt-to-income ratio is below 36%
	const ratio = (debt + expenses) / incomemonthly;
	if (ratio > 0.36) {
		problems.push(`Debt-to-income ratio exceeds 36%. Current: %${ratio * 100}`);
	}

	// Check to see if credit score is above 600
	creditscore = Number(creditscore);
	if (creditscore < 600) {
		problems.push(`Credit score is below 600. Current: ${creditscore}`);
	}

	// Check to see if they are able to repay the loan within the loan duration
	// income - expenses is gross income, then multiply by loan duration, and then compare to see if its repayable
	// job type and description will help manually review if the gross income is consistent or not.

	loanamount = Number(loanamount);
	loandur = Number(loandur);

	const grossincome = incomemonthly - expenses;
	const profitAfterLoanDuration = grossincome * loandur;

	// Check if earn more than debt amount (they are able to repay)

	if (profitAfterLoanDuration <= loanamount) {
		problems.push(`Unable to repay the loan within the loan duration.`);
	}

	formObject.problems = problems;

	// Database querying
	await connectDB();

	// Check to see if someone already submitted with same email

	const usedEmail = await applicationModel.findOne({ email: email });

	if (usedEmail) {
		await applicationModel.findOneAndReplace({ email: email }, formObject);
	} else {
		// Email does not exist so we can create
		await applicationModel.create(formObject);
	}

	redirect(`/application/result?email=${email}`);
}
