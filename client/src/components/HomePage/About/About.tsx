import React from 'react';
import styled from 'styled-components';

interface AboutProps {}

const AboutSection = styled.div`
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

const About: React.FC<AboutProps> = () => {
	return (
		<AboutSection>
			<h2>Stash is also... </h2>
			<h2>Your own personal space and helper</h2>
			<p>
				Stash is an asset management application that lets users save thier
				assets all in one place and easy to access for personal use. By assets
				we mean a large variation of data such as Images, text, video links and
				so on...
			</p>
			<p>
				These personal information can be saved in a single place and can be
				accessed fairly easily. The goal is to make it a seemingly effortless
				process to save and access your assets so you need not to go on 20
				different sites to access your favorite images, memos or blogs.
			</p>
			<h2>Just a side project</h2>
			<p>
				This application is a side-project made from react framework and nodejs,
				it currently serves no purpose for real commercial use.
			</p>
			<p>
				This project is not fully completed but it has it's basic
				functionalities established, this project was deployed in 2021 and new
				features may be added in the future if necessary.
			</p>
		</AboutSection>
	);
};

export default About;
