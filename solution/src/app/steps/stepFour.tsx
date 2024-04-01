import React from "react";
import NextStep from "./nextStep";
import { Subscription } from "../globals/types";

export default function StepFour({
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
  const billingCycle = subscription.billingCycle.toLowerCase() as
    | "monthly"
    | "yearly";
  const billingCycleAbbreviation = billingCycle === "monthly" ? "mo" : "yr";
  const [
    planPrice,
    onlineServicePrice,
    largerStoragePrice,
    customizableProfilePrice,
    total,
  ] = getPrices(subscription, billingCycle);

  return (
    <div className="text-coolGray font-[500] sm:flex flex-col h-full justify-between">
      <div>
        <h1 className="text-2xl text-marineBlue font-bold">Finishing up</h1>
        <p className="text-coolGray font-[500] my-4">
          Double-check everything looks OK before confirming.
        </p>
        <ul className="bg-alabaster rounded-md p-3">
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
            <p className="ml-auto text-marineBlue font-bold">{`$${planPrice}/${billingCycleAbbreviation}`}</p>
          </li>
          <li className="mt-4">
            <hr className="text-marineBlue h-1 w-full" />
          </li>
          {subscription.addOns.onlineService.active && (
            <li className="flex items-center mt-4">
              <p className="text-coolGray">Online service</p>
              <p className="ml-auto text-marineBlue/75 font-bold">
                {`+$${onlineServicePrice}/${billingCycleAbbreviation}`}
              </p>
            </li>
          )}
          {subscription.addOns.largerStorage.active && (
            <li className="flex items-center mt-4">
              <p className="text-coolGray">Larger storage</p>
              <p className="ml-auto text-marineBlue/75 font-bold">
                {`+$${largerStoragePrice}/${billingCycleAbbreviation}`}
              </p>
            </li>
          )}
          {subscription.addOns.customizableProfile.active && (
            <li className="flex items-center mt-4">
              <p className="text-coolGray">Customizable profile</p>
              <p className="ml-auto text-marineBlue/75 font-bold">
                {`+$${customizableProfilePrice}/${billingCycleAbbreviation}`}
              </p>
            </li>
          )}
        </ul>
        <div className="flex items-center px-4 mt-6">
          <p>Total (per {billingCycle === "monthly" ? "month" : "year"})</p>
          <p className="ml-auto text-purplishBlue font-semibold">{`+$${total}/${billingCycleAbbreviation}`}</p>
        </div>
      </div>
      <NextStep
        previousStep={previousStep}
        nextStep={nextStep}
        confirm={true}
      />
    </div>
  );
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPrices(
  subscription: Subscription,
  billingCycle: "monthly" | "yearly"
) {
  const plan = subscription.plan.active;
  const planPrice = subscription.plan[plan][billingCycle];
  const onlineServicePrice =
    subscription.addOns.onlineService.price[billingCycle];
  const largerStoragePrice =
    subscription.addOns.largerStorage.price[billingCycle];
  const customizableProfilePrice =
    subscription.addOns.customizableProfile.price[billingCycle];
  let total = planPrice;
  if (subscription.addOns.onlineService.active) total += onlineServicePrice;
  if (subscription.addOns.largerStorage.active) total += largerStoragePrice;
  if (subscription.addOns.customizableProfile.active)
    total += customizableProfilePrice;

  return [
    planPrice,
    onlineServicePrice,
    largerStoragePrice,
    customizableProfilePrice,
    total,
  ];
}
