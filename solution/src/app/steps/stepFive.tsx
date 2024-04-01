import React from "react";
import thankYou from "../../../public/images/icon-thank-you.svg";
import Image from "next/image";

function StepFive() {
  return (
    <div className="flex flex-col justify-center items-center text-coolGray text-center py-10">
      <div className="w-14 h-14 relative">
        <Image
          src={thankYou}
          alt="Completion icon"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-marineBlue text-2xl font-bold mb-2 mt-6">
        Thank you!
      </h1>
      <span className="sm:hidden">
        <p>Thanks for confirming your subscription!</p>
        <p>
          We hope you have fun using our platform. If you ever need support,
          please feel free to email us at support@loremgaming.com.
        </p>
      </span>
      <p className="hidden sm:block">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default StepFive;
