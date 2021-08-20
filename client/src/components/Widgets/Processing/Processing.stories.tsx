import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Processing from './Processing';

export default {
	title: 'Stash/Processing',
	component: Processing,
	argTypes: {
		backgroundColor: { control: 'color' },
		barColor: { control: 'color' }
	}
} as ComponentMeta<typeof Processing>;

const Template: ComponentStory<typeof Processing> = (args) => (
	<Processing {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
	primary: true
};

// export const Secondary = Template.bind({});
// Secondary.args = {
// 	label: 'Processing'
// };

// export const Large = Template.bind({});
// Large.args = {
// 	size: 'large',
// 	label: 'Processing'
// };

// export const Small = Template.bind({});
// Small.args = {
// 	size: 'small',
// 	label: 'Processing'
// };
