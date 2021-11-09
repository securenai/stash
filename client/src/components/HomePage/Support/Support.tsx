import React from 'react';
import styled from 'styled-components';

interface SupportProps {}

const SupportSection = styled.div`
	height: 100vh;
	font-size: 14px;
	line-height: 24px;
	padding: 48px 20px;
	margin: 0 auto;
	max-width: 600px;
	color: #333;
	flex-grow: 1;
	/* overflow: scroll; */
	overflow-x: hidden;
	&::-webkit-scrollbar {
		/* display: none; */
		width: 8px;
		background: #e6eaee;
		border-radius: 10px;
	}

	&::-webkit-scrollbar-thumb {
		background: #eeeaea;
		border-radius: 10px;
		/* color of the tracking area */
	}
`;

const Support: React.FC<SupportProps> = () => {
	return (
		<SupportSection>
			<h2>Support Stash</h2>
			<p>
				Need help? We've got your back. From account settings to permissions,
				find help for everything. If you're new to Stash and looking for tips,
				check out our Beginner's Guide ( None at the moment ).
			</p>
		</SupportSection>
	);
};

export default Support;
