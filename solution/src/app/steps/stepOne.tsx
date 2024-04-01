import { useForm, SubmitHandler } from "react-hook-form";
import NextStep from "./nextStep";
import { useState } from "react";
import { Subscription } from "../globals/types";

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

const defaultFormErrors = { name: null, email: null, phone: null };

export default function StepOne({
  subscription,
  setSubscription,
  nextStep,
}: {
  subscription: Subscription;
  setSubscription: (prevState: Subscription) => void;
  nextStep: () => void;
}) {
  const { register, handleSubmit, getValues } = useForm<Inputs>({
    defaultValues: {
      name: subscription.personalInfo.name,
      email: subscription.personalInfo.email,
      phone: subscription.personalInfo.phone,
    },
  });
  const [errors, setErrors] = useState<FormError>(defaultFormErrors);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    // Validate form inputs. If not valid, set error state and terminate submission. If valid, set error state to default, continue submission and go to next step
    const currentErrors = validateForm(data);
    if (currentErrors.name || currentErrors.email || currentErrors.phone) {
      setErrors(currentErrors);
      return;
    }
    // Reset error state to default in case it's not already in default state
    setErrors(defaultFormErrors);
    setSubscription({
      ...subscription,
      personalInfo: {
        name: data.name,
        email: data.email,
        phone: data.phone,
      },
    });
    nextStep();
  };

  return (
    <div className="h-full relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex flex-col justify-between"
      >
        <div className="flex flex-col">
          <h1 className="text-marineBlue text-2xl font-bold">Personal info</h1>
          <p className="text-[#9699ab] my-3">
            Please provide your name, email adress, and phone number.
          </p>
          <div className="flex justify-between items-center mt-4 mb-1">
            <label
              htmlFor="name"
              className="text-xs text-[#02295a] font-semibold"
            >
              Name
            </label>
            {errors.name && (
              <span className="text-strawberryRed font-extrabold text-xs">
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
            className={`border-[#9699ab] placeholder:text-coolGray border-[1px] rounded-[4px] font-semibold py-1 px-2 outline-none ${
              errors.name && "border-strawberryRed"
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
              <span className="text-strawberryRed font-extrabold text-xs">
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
            className={`border-[#9699ab] placeholder:text-coolGray border-[1px] rounded-[4px] font-semibold py-1 px-2 outline-none ${
              errors.email && "border-strawberryRed"
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
              <span className="text-strawberryRed font-extrabold text-xs">
                {errors.phone}
              </span>
            )}
          </div>
          <input
            autoComplete="off"
            type="tel"
            id="phone"
            placeholder="e.g. +1 1234 567 890"
            {...register("phone")}
            className={`border-[#9699ab] placeholder:text-coolGray border-[1px] rounded-[4px] font-semibold py-1 px-2 outline-none ${
              errors.phone && "border-strawberryRed"
            }`}
          />
        </div>

        <NextStep />
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
