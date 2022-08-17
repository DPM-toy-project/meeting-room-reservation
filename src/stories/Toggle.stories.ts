import Toggle from '@/components/ToggleItem.vue';
import type { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    checkedColor: { control: 'color' },
    uncheckedColor: { control: 'color' },
    value: { control: 'boolean' },
  },
} as Meta<typeof Toggle>;

const Template: StoryFn<typeof Toggle> = (args) => ({
  components: { Toggle },
  setup() {
    return { args };
  },
  template: '<Toggle v-model:value="args.value"/>',
});

export const Default = Template.bind({});
Default.args = {
  value: true,
};
