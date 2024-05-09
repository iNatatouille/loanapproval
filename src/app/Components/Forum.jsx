"use client";
import { useState } from "react";
import Input from "./Input";
import Link from "next/link";

const Forum = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = async (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // const handleSubmit = (event) => {
  //   // event.preventDefault();

  //   if (formData.firstName.length < 2) {
  //     alert("First name must be at least 2 characters long");
  //     return;
  //   }

  //   if (formData.lastName.length < 2) {
  //     alert("Last name must be at least 2 characters long");
  //     return;
  //   }

  //   if (formData.email.length < 5) {
  //     alert("Email must be at least 5 characters long");
  //     return;
  //   }

  //   useRouter().push(`/application?fname=${formData.firstName}&lname=${formData.lastName}&email=${formData.email}`)

  //   // Implement form submission logic here (e.g., send data to server)
  //   // const response = await fetch('/api/signup', {
  //   //   method: 'POST',
  //   //   body: JSON.stringify(formData),
  //   // });

  //   // if (response.ok) {
  //   //   console.log('Form submission successful:', await response.json());
  //   //   // Handle successful submission (e.g., redirect, show confirmation)
  //   // } else {
  //   //   console.error('Form submission failed:', await response.text());
  //   //   // Handle errors (e.g., display error message)
  //   // }
  // };

  return (
    <div className='signup-container flex justify-center'>
      <forum className='signup-form'>
        <div className='name-group flex gap-5'>
          <Input // Or use regular input elements
            type='text'
            name='firstName'
            label='First Name'
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input // Or use regular input elements
            type='text'
            name='lastName'
            label='Last Name'
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='form-group w-128'>
          <Input // Or use regular input elements
            type='email'
            name='email'
            label='Email Address'
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <Link
          href={{
            pathname: "/application",
            query: formData,
          }}
          className='m-auto rounded mt-4 px-4 py-2 bg-blue-500 text-white hover:bg-blue-700'
        >
          Get a quote
        </Link>
      </forum>
    </div>
  );
};

export default Forum;
