import React from "react";
import NextStep from "./nextStep";

function StepFour({
  previousStep,
  nextStep,
}: {
  previousStep: () => void;
  nextStep: () => void;
}) {
  return (
    <div>
      stepFour
      <NextStep previousStep={previousStep} nextStep={nextStep} />
    </div>
  );
}

export default StepFour;
