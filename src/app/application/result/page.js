import React from "react";
import connectDB from "../../database/db";
import applicationModel from "../../database/applicationModel";
import Link from "next/link";

const Result = async ({ searchParams }) => {
	const { email } = searchParams;

	// get database

	await connectDB();
	const userApplication = await applicationModel.findOne({ email: email });

	const applicationPassed = userApplication.problems.length === 0;

	return (
		<>
			<div className='w-full flex justify-center'>
				<div className='w-3/4 mt-10 flex flex-col justify-center gap-16'>
					<label className='text-center text-white text-4xl font-bold'>
						Application Status: {applicationPassed ? "Success" : "Failed"}
					</label>
					{(applicationPassed && (
						<label className='text-center text-white text-2xl'>
							You are eligible for your loan.
						</label>
					)) || (
						<div className='text-center text-white text-2xl'>
							<div className='mb-5'>You are not eligible for your loan:</div>
							{userApplication.problems.map((reason) => {
								return (
									<li className='text-xl' key={reason}>
										{reason}
									</li>
								);
							})}
						</div>
					)}
					<Link
						href={{
							pathname: "/",
						}}
						className='m-auto rounded mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-700'
					>
						Return
					</Link>
				</div>
			</div>
		</>
	);
};

export default Result;
