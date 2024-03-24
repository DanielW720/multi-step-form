import React from "react";
import NextStep from "./nextStep";
import { Subscription } from "../globals/types";

function StepFour({
  subscription,
  previousStep,
  nextStep,
  goToStepTwo,
}: {
  subscription: Subscription;
  previousStep: () => void;
  nextStep: () => void;
  goToStepTwo: () => void;
}) {
  return (
    <div className="text-coolGray font-[500]">
      <h1 className="text-2xl text-marineBlue font-bold">Finishing up</h1>
      <p className="text-coolGray font-[500] my-4">
        Double-check everything looks OK before confirming.
      </p>
      <div className="rounded-md bg-alabaster p-3">
        <ul>
          <li className="flex items-center">
            <div>
              <p className="text-marineBlue font-bold">
                {`${capitalizeFirstLetter(subscription.plan.active)} (${
                  subscription.billingCycle
                })`}
              </p>
              <button onClick={goToStepTwo} className="underline">
                Change
              </button>
            </div>
            <p className="ml-auto text-marineBlue font-bold">$9/mo</p>
          </li>
        </ul>
      </div>
      <NextStep
        previousStep={previousStep}
        nextStep={nextStep}
        confirm={true}
      />
    </div>
  );
}

export default StepFour;

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
