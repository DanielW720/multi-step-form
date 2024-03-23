import React from "react";
import NextStep from "./nextStep";

function StepTwo({
  previousStep,
  nextStep,
}: {
  previousStep: () => void;
  nextStep: () => void;
}) {
  return (
    <div>
      stepTwo
      <NextStep previousStep={previousStep} nextStep={nextStep} />
    </div>
  );
}

export default StepTwo;
