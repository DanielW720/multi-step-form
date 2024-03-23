import { useForm, SubmitHandler } from "react-hook-form";
import NextStep from "./nextStep";
import { watch } from "fs";

type Inputs = {
  name: string;
  email: string;
  phone: number;
};

export default function StepOne() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

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
          {...register("name")}
          className="border-[#9699ab] border-[1px] rounded-[4px] font-semibold text-[#9699ab] py-1 px-2"
        />

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
          {...register("email")}
          className="border-[#9699ab] border-[1px] rounded-[4px] font-semibold text-[#9699ab] py-1 px-2"
        />

        <label
          htmlFor="phone"
          className="text-sm text-[#02295a] font-semibold mt-4"
        >
          Phone
        </label>
        <input
          autoComplete="off"
          type="number"
          id="email"
          placeholder="e.g. +1 1234 567 890"
          {...register("email")}
          className="border-[#9699ab] border-[1px] rounded-[4px] font-semibold text-[#9699ab] py-1 px-2"
        />

        <NextStep onSubmit={onSubmit} />
      </form>
    </div>
  );
}
