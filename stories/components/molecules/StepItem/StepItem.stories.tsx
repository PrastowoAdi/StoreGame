/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import { Meta } from "@storybook/react";
import StepItem, { StemItemProps } from "../../../../components/molecules/StepItem";

export default {
  title: "Components/Molecules/StepItem",
  component: StepItem,
} as Meta;

const Template = (args: StemItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});

// Default.args = {
//   icon: "step1",
//   title: "1. Start",
//   desc1: "Pilih salah satu game",
//   desc2: "yang ingin kamu top up",
// };