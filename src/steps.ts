import arcade from "./assets/images/icon-arcade.svg";
import advance from "./assets/images/icon-advanced.svg";
import pro from "./assets/images/icon-pro.svg";

export const steps = [
  {
    label: "Your info",
    title: "Personal info",
    subtitle: "Please provide your name, email address and phone number.",
  },
  {
    label: "Select plan",
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing.",
  },
  {
    label: "Add-ons",
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
  },
  {
    label: "Summary",
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before confirming.",
  },
];

export enum PlanTypes {
  arcade = "Arcade",
  advanced = "Advanced",
  pro = "Pro",
}

export enum Periods {
  monthly = "Monthly",
  yearly = "Yearly",
}

export const plans = [
  {
    type: PlanTypes.arcade,
    price: 9,
    img: arcade,
  },
  {
    type: PlanTypes.advanced,
    price: 12,
    img: advance,
  },
  {
    type: PlanTypes.pro,
    price: 15,
    img: pro,
  },
];

export const addOnns = [
  {
    title: "Online service",
    subtitle: "Access to multiplayer games",
    price: 1,
  },
  {
    title: "Larger storage",
    subtitle: "Extra 1TB of cloud save",
    price: 2,
  },
  {
    title: "Customizable Profile",
    subtitle: "Custom theme on your profile",
    price: 2,
  },
];
