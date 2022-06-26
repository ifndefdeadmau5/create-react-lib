import { ComponentStoryObj, Meta } from "@storybook/react";
import Calendar from "./Calendar";

export default {
  component: Calendar,
  parameters: {
    backgrounds: { default: "white" },
  },
} as Meta;

type Story = ComponentStoryObj<typeof Calendar>;
const Standard: Story = {
  render: (args) => <Calendar {...args} />,
  args: {},
};

export const DefaultStory: Story = {
  ...Standard,
};
