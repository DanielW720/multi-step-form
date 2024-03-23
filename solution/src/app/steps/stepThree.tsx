import React from "react";
import NextStep from "./nextStep";

function StepThree({
  previousStep,
  nextStep,
}: {
  previousStep: () => void;
  nextStep: () => void;
}) {
  return (
    <div>
      stepThree
      <NextStep previousStep={previousStep} nextStep={nextStep} />
    </div>
  );
}

export default StepThree;
