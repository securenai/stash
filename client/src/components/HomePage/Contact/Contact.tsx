import React from 'react';
import styled from 'styled-components';

interface ContactProps {}

const ContactSection = styled.div`
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

const Contact: React.FC<ContactProps> = () => {
	return (
		<ContactSection>
			<h2>Contact</h2>
			<p>Please contact me at _nova@alum.ccu.edu.tw</p>
		</ContactSection>
	);
};

export default Contact;
