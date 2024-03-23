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
    } else if (errors?.name || errors?.email || errors?.phone) {
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
        <label htmlFor="name" className="text-sm text-[#02295a] font-semibold ">
          Name
        </label>
        <input
          autoComplete="off"
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          required
          {...register("name")}
          className="border-[#9699ab] border-[1px] rounded-[4px] font-semibold text-[#9699ab] py-1 px-2"
        />
        {errors?.name && (
          <span className="text-[#ed3548] font-semibold text-sm">
            {errors.name}
          </span>
        )}

        <label
          htmlFor="email"
          className="text-sm text-[#02295a] font-semibold mt-4"
        >
          Email Address
        </label>
        <input
          autoComplete="off"
          type="email"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          required
          {...register("email")}
          className="border-[#9699ab] border-[1px] rounded-[4px] font-semibold text-[#9699ab] py-1 px-2"
        />
        {errors?.email && (
          <span className="text-[#ed3548] font-semibold text-sm">
            {errors.email}
          </span>
        )}

        <label
          htmlFor="phone"
          className="text-sm text-[#02295a] font-semibold mt-4"
        >
          Phone
        </label>
        <input
          autoComplete="off"
          type="number"
          id="phone"
          placeholder="e.g. +1 1234 567 890"
          required
          {...register("phone")}
          className="border-[#9699ab] border-[1px] rounded-[4px] font-semibold text-[#9699ab] py-1 px-2"
        />
        {errors?.phone && (
          <span className="text-[#ed3548] font-semibold text-sm">
            {errors.phone}
          </span>
        )}

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
    errors.phone = "Invalid phone number format";
  }

  return errors;
}
