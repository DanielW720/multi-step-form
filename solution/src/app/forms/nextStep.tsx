import { SubmitHandler } from "react-hook-form";

export default function NextStep({
  onSubmit,
}: {
  onSubmit: SubmitHandler<any>;
}) {
  return (
    <div className="bg-white h-20 w-screen absolute bottom-0 left-0 flex justify-end items-center px-4">
      <button
        type="submit"
        className="rounded-md text-white bg-[#02295a] px-4 py-3"
      >
        Next Step
      </button>
    </div>
  );
}
