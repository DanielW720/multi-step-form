export default function NextStep({
  previousStep,
  nextStep,
}: {
  previousStep?: () => void;
  nextStep?: () => void;
}) {
  return (
    <div className="bg-white h-20 absolute bottom-0 left-0 w-screen flex justify-between items-center px-4 text-sm">
      {previousStep ? (
        <button className="text-coolGray font-bold" onClick={previousStep}>
          Go Back
        </button>
      ) : null}
      <div
        className="rounded-md ml-auto text-white bg-[#02295a] px-4 py-3"
        onClick={nextStep}
      >
        Next Step
      </div>
    </div>
  );
}
