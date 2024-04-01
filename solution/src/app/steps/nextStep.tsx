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
    <div
      className={`bg-white w-screen h-20 fixed bottom-0 left-0 flex justify-between items-center px-4 sm:px-0 text-sm sm:static sm:w-full sm:h-fit`}
    >
      {previousStep ? (
        <button className="text-coolGray font-bold" onClick={previousStep}>
          Go Back
        </button>
      ) : null}
      <button
        type={previousStep != undefined ? "button" : "submit"}
        className={`rounded-md ml-auto text-white px-4 py-3 ${
          confirm ? "bg-purplishBlue" : "bg-marineBlue"
        }`}
        onClick={nextStep}
      >
        {confirm ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
}
