export default function NextStep({
  previousStep,
  nextStep,
  confirm,
}: {
  previousStep?: () => void;
  nextStep?: () => void;
  confirm?: boolean;
}) {
  return (
    <div className="bg-white h-20 absolute bottom-0 left-0 w-screen flex justify-between items-center px-4 text-sm">
      {previousStep ? (
        <button className="text-coolGray font-bold" onClick={previousStep}>
          Go Back
        </button>
      ) : null}
      <div
        className={`rounded-md ml-auto text-white px-4 py-3 ${
          confirm ? "bg-purplishBlue" : "bg-marineBlue"
        }`}
        onClick={nextStep}
      >
        {confirm ? "Confirm" : "Next Step"}
      </div>
    </div>
  );
}
