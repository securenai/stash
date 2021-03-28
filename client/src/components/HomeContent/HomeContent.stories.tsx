import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { HomeContent, HomeContentProps } from './HomeContent';

export default {
	title: 'HomeContent',
	component: HomeContent
} as Meta;

const Template: Story<HomeContentProps> = (args) => <HomeContent {...args} />;

export const Content = Template.bind({});
Content.args = {};
