import { ComponentMeta, ComponentStory } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Atoms/Display/Card",
  component: Card,
  args: {
    children: "Contenido de la tarjeta",
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
