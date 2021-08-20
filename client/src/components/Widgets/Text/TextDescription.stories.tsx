import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextDescription from './TextDescription';

export default {
	title: 'Stash/TextDescription',
	component: TextDescription
	// argTypes: {
	// 	backgroundColor: { control: 'color' },
	// 	barColor: { control: 'color' }
	// }
} as ComponentMeta<typeof TextDescription>;

const Template: ComponentStory<typeof TextDescription> = (args) => (
	<TextDescription {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	// primary: true
};
