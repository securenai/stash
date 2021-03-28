import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { StashItem, StashItemProps } from './StashItem';

export default {
	title: 'StashItem',
	component: StashItem
} as Meta;

const Template: Story<StashItemProps> = (args) => <StashItem {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
