import React from "react";
import NextStep from "./nextStep";
import { Subscription } from "../globals/types";
import Image from "next/image";
import * as RadixSwitch from "@radix-ui/react-switch";

export default function StepTwo({
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
  const monthlyBilling = subscription.billingCycle === "Monthly";
  const onClick = (newPlan: Subscription["plan"]["active"]) =>
    setSubscription({
      ...subscription,
      plan: {
        ...subscription.plan,
        active: newPlan,
      },
    });
  const onSwitchClick = () => {
    setSubscription({
      ...subscription,
      billingCycle: monthlyBilling ? "Yearly" : "Monthly",
    });
  };

  return (
    <div className="max-h-[calc(100vh-15rem)] overflow-y-scroll">
      <h1 className="font-bold text-marineBlue text-2xl">Select your plan</h1>
      <p className="text-coolGray mt-2 mb-4">
        You have the option of monthly or yearly billing.
      </p>
      <ul className="gap-3 grid grid-cols-1">
        <PlanListing
          plan="arcade"
          subscription={subscription}
          setSubscription={onClick}
        />
        <PlanListing
          plan="advanced"
          subscription={subscription}
          setSubscription={onClick}
        />
        <PlanListing
          plan="pro"
          subscription={subscription}
          setSubscription={onClick}
        />
        <Switch monthlyBilling={monthlyBilling} onSwitchClick={onSwitchClick} />
      </ul>
      <NextStep previousStep={previousStep} nextStep={nextStep} />
    </div>
  );
}

function PlanListing({
  plan,
  subscription,
  setSubscription,
}: {
  plan: "arcade" | "advanced" | "pro";
  subscription: Subscription;
  setSubscription: (newPlan: Subscription["plan"]["active"]) => void;
}) {
  const isActive = subscription.plan.active === plan;
  const monthly = subscription.billingCycle === "Monthly";
  const billing = monthly
    ? `$${subscription.plan[plan].monthly}/mo`
    : `$${subscription.plan[plan].yearly}/yr`;

  return (
    <li
      onClick={() => setSubscription(plan)}
      className={`flex flex-row items-start justify-start border-[1px] rounded-md p-4 ${
        isActive ? "border-marineBlue bg-alabaster" : "border-coolGray"
      }`}
    >
      <div className="relative h-10 w-10 ">
        <Image
          src={subscription.plan[plan].icon}
          alt={subscription.plan[plan].alt}
          fill
        />
      </div>
      <div className="px-2">
        <h2 className="text-marineBlue font-semibold">
          {subscription.plan[plan].displayName}
        </h2>
        <p className="text-coolGray text-sm">{billing}</p>
        {!monthly && (
          <p className="text-marineBlue text-sm font-[500] mt-1">
            {subscription.plan.specialOffer}
          </p>
        )}
      </div>
    </li>
  );
}

function Switch({
  monthlyBilling,
  onSwitchClick,
}: {
  monthlyBilling: boolean;
  onSwitchClick: () => void;
}) {
  return (
    <div className="rounded-md bg-alabaster flex items-center justify-center py-3 font-[500]">
      <h3 className={`${monthlyBilling ? "text-marineBlue" : "text-coolGray"}`}>
        Monthly
      </h3>
      <RadixSwitch.Root
        className="w-[42px] h-[22px] bg-blackA6 rounded-full relative data-[state=checked] bg-marineBlue outline-none cursor-default mx-4"
        onCheckedChange={onSwitchClick}
      >
        <RadixSwitch.Thumb className="block w-[15px] h-[15px] bg-white rounded-full transition-transform duration-100 translate-x-[4px] will-change-transform data-[state=checked]:translate-x-[22px]" />
      </RadixSwitch.Root>
      <h3
        className={`${!monthlyBilling ? "text-marineBlue" : "text-coolGray"}`}
      >
        Yearly
      </h3>
    </div>
  );
}
