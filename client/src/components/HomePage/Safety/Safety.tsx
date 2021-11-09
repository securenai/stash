import React from 'react';
import styled from 'styled-components';

interface SafetyProps {}

const SafetySection = styled.div`
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

const Safety: React.FC<SafetyProps> = () => {
	return (
		<SafetySection>
			<h2>Safety</h2>
			<p>
				This application is a side-project only, experimental use is fine but it
				is advised not to save sensitive data such as passwords, company
				information.. etc here.
			</p>
		</SafetySection>
	);
};

export default Safety;
