export type Subscription = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  billingCycle: "Monthly" | "Yearly";
  plan: {
    specialOffer: string;
    arcade: {
      monthly: 9;
      yearly: 90;
    };
    advanced: {
      monthly: 12;
      yearly: 120;
    };
    pro: {
      monthly: 15;
      yearly: 150;
    };
  };
  addOns: {
    onlineService: {
      active: boolean;
      displayName: string;
      description: string;
      price: {
        monthly: 1;
        yearly: 10;
      };
    };
    largerStorage: {
      active: boolean;
      displayName: string;
      description: string;
      price: {
        monthly: 2;
        yearly: 20;
      };
    };
    customizableProfile: {
      active: boolean;
      displayName: string;
      description: string;
      price: {
        monthly: 2;
        yearly: 20;
      };
    };
  };
};
