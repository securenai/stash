import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { UserInfo, UserInfoProps } from './UserInfo';

export default {
	title: 'UserInfo',
	component: UserInfo
} as Meta;

const Template: Story<UserInfoProps> = (args) => <UserInfo {...args} />;

export const Standard = Template.bind({});
Standard.args = {};
