import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { DashSideTop, DashSideTopProps } from './DashSideTop';

export default {
	title: 'DashSideTop',
	component: DashSideTop
} as Meta;

const Template: Story<DashSideTopProps> = (args) => <DashSideTop {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
