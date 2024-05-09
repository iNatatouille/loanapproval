"use client";
import React, { useState } from "react";
import Input from "../Components/Input";
import LoanButton from "../Components/LoanButton";

const Application = ({ searchParams }) => {
  const [formData, setFormData] = useState({
    firstname: searchParams.firstName,
    lastname: searchParams.lastName,
    email: searchParams.email,
    dob: "",
    phone: "",

    loanamount: 1000, // GBP
    loandur: 1, // Months
    loanpurpose: "",
    loantype: "",

    jobtitle: "",
    incomesource: "",
    incomemonthly: 0,

    expenses: 0,
    debt: 0,
    creditscore: 0,
  });

  const handleChange = async (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div>
        <div className='mx-auto w-max text-white grid col-span-1 gap-2 text-center'>
          <h1 className='text-5xl py-5'>Loan Application</h1>
          {/* <p className='text-xl'>
            {searchParams.firstName + " " + searchParams.lastName}
          </p>
          <p className='text-xl'>{searchParams.email}</p> */}
        </div>
      </div>
      <div className='flex justify-center pt-20'>
        <forum className='w-[32rem]'>
          <section className='my-10'>
            <div className='text-3xl w-full text-center mb-10 font-bold text-white'>
              Loan Information
            </div>
            <Input // Or use regular input elements
              type='number'
              name='loanamount'
              label='Loan Amount (£)'
              value={formData.loanamount}
              onChange={handleChange}
              required
              min={1000}
              step={500}
            />
            <Input // Or use regular input elements
              type='number'
              name='loandur'
              label='Loan Duration (months)'
              value={formData.loandur}
              onChange={handleChange}
              required
              min={1}
              max={24}
              step={1}
            />
            <label className='block mb-2 text-white text-l font-bold'>
              Purpose of loan: {formData.loanpurpose}
            </label>
            <div className='flex justify-start gap-5'>
              <LoanButton
                value='Mortgage'
                name='loanpurpose'
                onClick={handleChange}
              />
              <LoanButton
                value='Personal Loan'
                name='loanpurpose'
                onClick={handleChange}
              />
              <LoanButton
                value='Auto Loan'
                name='loanpurpose'
                onClick={handleChange}
              />
              <LoanButton
                value='Student Loan'
                name='loanpurpose'
                onClick={handleChange}
              />
            </div>
          </section>
          <section className='my-20'>
            <div className='text-3xl w-full text-center mb-10 font-bold text-white'>
              User Information
            </div>
            <Input // Or use regular input elements
              type='text'
              name='firstname'
              label='First name'
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            <Input // Or use regular input elements
              type='text'
              name='lastname'
              label='Last name'
              value={formData.lastname}
              onChange={handleChange}
              required
            />
            <Input // Or use regular input elements
              type='text'
              name='email'
              label='Email'
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input // Or use regular input elements
              type='date'
              name='dob'
              label='Date of birth'
              value={formData.dob}
              onChange={handleChange}
              required
              className='w-1/3'
            />
            <Input // Or use regular input elements
              type='string'
              name='phone'
              label='Phone number'
              value={formData.phone}
              onChange={handleChange}
              required
              className='w-3/4'
            />
          </section>
          <section className='my-20'>
            <div className='text-3xl w-full text-center mb-10 font-bold text-white'>
              Employment and Income
            </div>
            <label className='block mb-2 text-white text-l font-bold'>
              Income Source: {formData.incomesource}
            </label>
            <div className='pb-5 flex justify-start flex-wrap gap-5'>
              <LoanButton
                value='Full time'
                name='incomesource'
                onClick={handleChange}
              />
              <LoanButton
                value='Part time'
                name='incomesource'
                onClick={handleChange}
              />
              <LoanButton
                value='Self employed'
                name='incomesource'
                onClick={handleChange}
              />
              <LoanButton
                value='Retired'
                name='incomesource'
                onClick={handleChange}
              />
              <LoanButton
                value='Student'
                name='incomesource'
                onClick={handleChange}
              />
              <LoanButton
                value='Un-employed'
                name='incomesource'
                onClick={handleChange}
              />
            </div>
            <Input // Or use regular input elements
              type='text'
              name='jobtitle'
              label='Job Title'
              value={formData.jobtitle}
              onChange={handleChange}
              required
            />
            <Input // Or use regular input elements
              type='number'
              name='incomemonthly'
              label='Monthly Income Amount (£)'
              value={formData.incomemonthly}
              onChange={handleChange}
              required
              min={0}
              step={5}
            />
          </section>
          <section className='my-20'>
            <div className='text-3xl w-full text-center mb-10 font-bold text-white'>
              Debt and expenses
            </div>
            <Input // Or use regular input elements
              type='number'
              name='expenses'
              label='Monthly Expense Amount (£)'
              value={formData.expenses}
              onChange={handleChange}
              required
              min={0}
              step={5}
            />
            <Input // Or use regular input elements
              type='number'
              name='debt'
              label='Current debt amount (£)'
              value={formData.debt}
              onChange={handleChange}
              required
              min={0}
              step={5}
            />
            <Input // Or use regular input elements
              type='number'
              name='creditscore'
              label='Current credit score'
              value={formData.creditscore}
              onChange={handleChange}
              required
              min={0}
              max={999}
              step={1}
            />
          </section>
        </forum>
      </div>
    </>
  );
};

export default Application;
