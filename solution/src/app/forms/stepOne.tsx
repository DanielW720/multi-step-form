import { useForm, SubmitHandler } from "react-hook-form";
import NextStep from "./nextStep";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  phone: string;
};

type FormError = {
  name: string | null;
  email: string | null;
  phone: string | null;
};

const defaultFormErros = { name: null, email: null, phone: null };

export default function StepOne() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [errors, setErrors] = useState<FormError>(defaultFormErros);
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const currentErrors = validateForm(data);
    if (currentErrors.name || currentErrors.email || currentErrors.phone) {
      console.log(currentErrors);
      setErrors(currentErrors);
    } else if (errors.name || errors.email || errors.phone) {
      setErrors(defaultFormErros);
    }
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-[#02295a] text-3xl font-bold">Personal info</h1>
      <p className="text-[#9699ab] my-4">
        Please provide your name, email adress, and phone number.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="flex justify-between items-center mt-4 mb-1">
          <label
            htmlFor="name"
            className="text-xs text-[#02295a] font-semibold"
          >
            Name
          </label>
          {errors.name && (
            <span className="text-[#ed3548] font-extrabold text-xs">
              {errors.name}
            </span>
          )}
        </div>
        <input
          autoComplete="off"
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          {...register("name")}
          className={`border-[#9699ab] border-[1px] rounded-[4px] font-semibold text-[#9699ab] py-1 px-2 outline-none ${
            errors.name && "border-[#ed3548]"
          }`}
        />

        <div className="flex justify-between items-center mt-4 mb-1">
          <label
            htmlFor="email"
            className="text-xs text-[#02295a] font-semibold"
          >
            Email Address
          </label>
          {errors.email && (
            <span className="text-[#ed3548] font-extrabold text-xs">
              {errors.email}
            </span>
          )}
        </div>
        <input
          autoComplete="off"
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          {...register("email")}
          className={`border-[#9699ab] border-[1px] rounded-[4px] font-semibold text-[#9699ab] py-1 px-2 outline-none ${
            errors.email && "border-[#ed3548]"
          }`}
        />

        <div className="flex justify-between items-center mt-4 mb-1">
          <label
            htmlFor="phone"
            className="text-xs text-[#02295a] font-semibold"
          >
            Phone Number
          </label>
          {errors.phone && (
            <span className="text-[#ed3548] font-extrabold text-xs">
              {errors.phone}
            </span>
          )}
        </div>
        <input
          autoComplete="off"
          type="number"
          id="phone"
          placeholder="e.g. +1 1234 567 890"
          {...register("phone")}
          className={`border-[#9699ab] border-[1px] rounded-[4px] font-semibold text-[#9699ab] py-1 px-2 outline-none ${
            errors.phone && "border-[#ed3548]"
          }`}
        />

        <NextStep onSubmit={onSubmit} />
      </form>
    </div>
  );
}

function validateForm(data: Inputs) {
  const errors: FormError = {
    name: null,
    email: null,
    phone: null,
  };

  // Name validation
  if (!data.name.trim()) {
    errors.name = "Name is required";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Invalid email format";
  }

  // Phone number validation
  const phoneRegex = /^\d{10}$/; // Assuming 10 digits for simplicity
  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = "Invalid format";
  }

  return errors;
}
