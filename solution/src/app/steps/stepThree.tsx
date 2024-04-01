import React from "react";
import NextStep from "./nextStep";
import { Subscription } from "../globals/types";
import Image from "next/image";

export default function StepThree({
  subscription,
  setSubscription,
  previousStep,
  nextStep,
}: {
  subscription: Subscription;
  setSubscription: (subscription: Subscription) => void;
  previousStep: () => void;
  nextStep: () => void;
}) {
  return (
    <div className="sm:flex flex-col justify-between h-full">
      <div>
        <h1 className="text-marineBlue text-2xl font-bold">Pick add-ons</h1>
        <p className="text-coolGray font-[500] my-4 sm:mb-10">
          Add-ons help enhance your gaming experience.
        </p>
        <ul className="grid grid-cols-1 gap-3">
          <AddOn
            addOn="onlineService"
            subscription={subscription}
            setSubscription={setSubscription}
          />
          <AddOn
            addOn="largerStorage"
            subscription={subscription}
            setSubscription={setSubscription}
          />
          <AddOn
            addOn="customizableProfile"
            subscription={subscription}
            setSubscription={setSubscription}
          />
        </ul>
      </div>
      <NextStep previousStep={previousStep} nextStep={nextStep} />
    </div>
  );
}

function AddOn({
  addOn,
  subscription,
  setSubscription,
}: {
  addOn: "onlineService" | "largerStorage" | "customizableProfile";
  subscription: Subscription;
  setSubscription: (subscription: Subscription) => void;
}) {
  const monthlyBilling = subscription.billingCycle === "Monthly";
  const price = `+$${
    subscription.addOns[addOn].price[monthlyBilling ? "monthly" : "yearly"]
  }/${monthlyBilling ? "mo" : "yr"}`;

  const onAddOnClick = () => {
    const isActiveOS = subscription.addOns.onlineService.active;
    const isActiveCP = subscription.addOns.customizableProfile.active;
    const isActiveLS = subscription.addOns.largerStorage.active;

    const newSubObj = {
      ...subscription,
      addOns: {
        onlineService: {
          ...subscription.addOns.onlineService,
          active: addOn === "onlineService" ? !isActiveOS : isActiveOS,
        },
        customizableProfile: {
          ...subscription.addOns.customizableProfile,
          active: addOn === "customizableProfile" ? !isActiveCP : isActiveCP,
        },
        largerStorage: {
          ...subscription.addOns.largerStorage,
          active: addOn === "largerStorage" ? !isActiveLS : isActiveLS,
        },
      },
    } as Subscription;

    setSubscription(newSubObj);
  };

  return (
    <li
      className="border-[1px] border-coolGray rounded-md p-2 flex items-center xs:p-4"
      onClick={onAddOnClick}
    >
      <div
        className={`relative h-4 w-4 rounded-[4px] xs:h-5 xs:w-5 border-[1px] border-coolGray ${
          subscription.addOns[addOn].active && "bg-purplishBlue"
        }`}
      >
        <Image
          src="/images/icon-checkmark.svg"
          alt="Checkmark"
          fill
          className={`object-contain p-[2px] xs:p-[3px]`}
        />
      </div>
      <div className="ml-3">
        <h2 className="text-lg text-marineBlue font-bold">
          {subscription.addOns[addOn].displayName}
        </h2>
        <p className="text-coolGray text-sm font-[500]">
          {subscription.addOns[addOn].description}
        </p>
      </div>
      <p className="ml-auto text-purplishBlue font-[500] text-sm">{price}</p>
    </li>
  );
}
