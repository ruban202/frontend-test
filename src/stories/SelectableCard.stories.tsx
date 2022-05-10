import { ComponentStory, ComponentMeta } from "@storybook/react"

import SelectableCard from "../components/SelectableCard"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/SelectableCard",
  component: SelectableCard
} as ComponentMeta<typeof SelectableCard>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectableCard> = (args) => <SelectableCard {...args} />

export const Example = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Example.args = {
  color: "primary",
  title: "Flood Zone 1",
  image: require("../assets/images/ancient-woodlands.png"),
  selected: false,
  setSelected: (s) => console.log(s)
}
