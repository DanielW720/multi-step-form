export type Subscription = {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  billingCycle: "Monthly" | "Yearly";
  plan: {
    specialOffer: string;
    active: "arcade" | "advanced" | "pro";
    arcade: {
      monthly: 9;
      yearly: 90;
      displayName: string;
      icon: string;
      alt: string;
    };
    advanced: {
      monthly: 12;
      yearly: 120;
      displayName: string;
      icon: string;
      alt: string;
    };
    pro: {
      monthly: 15;
      yearly: 150;
      displayName: string;
      icon: string;
      alt: string;
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

export type Step = 1 | 2 | 3 | 4 | 5;
