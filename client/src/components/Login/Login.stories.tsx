import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Login, LoginProps } from './Login';

export default {
	title: 'Login',
	component: Login
} as Meta;

const Template: Story<LoginProps> = (args) => <Login {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
