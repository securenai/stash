import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { NavLink, NavLinkProps } from './NavLink';

export default {
	title: 'NavLink',
	component: NavLink
} as Meta;

const Template: Story<NavLinkProps> = (args) => <NavLink {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
