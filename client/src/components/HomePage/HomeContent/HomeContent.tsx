import React, { useState } from 'react';
import './HomeContent.css';
import styled from 'styled-components';
import HomeSvg from '../../Widgets/SvgBackground/HomeSvg';
import ImageViewer from '../../../components/Widgets/Viewer/ImageViewer/ImageViewer';

export interface HomeContentProps {}

export const HomeContent: React.FC<HomeContentProps> = () => {
	const [showImageViewer, setShowImageViewer] = useState(false);
	const [currentImage, setCurrentImage] = useState('');

	return (
		<div className="section">
			<h2>Handy Asset Manager</h2>
			<p>
				Hi ! Welcome to Stash! Stash is a place where you can save your favorite
				images, Youtube links, Twitter posts and code snippets all in one place
				and we organize it for you!
			</p>
			<p>
				you can sort your data into catergories and you will be blown away by
				how easily you can access them and have them ready to share with family
				and friends!!
			</p>
			<p>
				Sign up and Login right now to experience the amazing features of stash!
			</p>
			<p>Lets have a quick look of how Stash works!</p>
			<div className="img-wrapper">
				<figure>
					<img
						className="home-img"
						src="https://res.cloudinary.com/dfkw9hdq3/image/upload/v1636385985/stash/Admin/Web/s1.png"
						onClick={() => {
							setCurrentImage('stash/Admin/Web/s1');
							setShowImageViewer(true);
						}}
					/>
					<figcaption>click on image for zoom-in view</figcaption>
				</figure>
			</div>

			{/* <p>
				We recommend building UIs with a{' '}
				<a
					href="https://componentdriven.org"
					target="_blank"
					rel="noopener noreferrer">
					<strong>component-driven</strong>
				</a>{' '}
				process starting with atomic components and ending with pages.
			</p>
			<p>
				Render pages with mock data. This makes it easy to build and review page
				states without needing to navigate to them in your app. Here are some
				handy patterns for managing page data in Storybook:
			</p> */}
			<ul>
				<li>
					<span className="tip">Step 1</span> Create a stash by clicking the
					pencil icon on the left sidebar under your name.
				</li>
				<li>
					<span className="tip">Step 2</span> A window will pop up asking for
					the stash name and what type of data you want to manage.
				</li>
				<li>
					<span className="tip">Step 3</span> After you're done, simply click
					save and the new stash is ready to use!
				</li>
			</ul>
			{/* <p>
				Get a guided tutorial on component-driven development at{' '}
				<a
					href="https://www.learnstorybook.com"
					target="_blank"
					rel="noopener noreferrer">
					Learn Storybook
				</a>
				. Read more in the{' '}
				<a
					href="https://storybook.js.org/docs"
					target="_blank"
					rel="noopener noreferrer">
					docs
				</a>
				.
			</p> */}
			{/* <div className="tip-wrapper">
				<span className="tip">Tip</span> Adjust the width of the canvas with the{' '}
				<svg
					width="10"
					height="10"
					viewBox="0 0 12 12"
					xmlns="http://www.w3.org/2000/svg">
					<g fill="none" fillRule="evenodd">
						<path
							d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
							id="a"
							fill="#999"
						/>
					</g>
				</svg>
				Viewports addon in the toolbar
			</div> */}
			<div className="img-wrapper">
				<figure>
					<img
						className="home-img img-sm"
						src="https://res.cloudinary.com/dfkw9hdq3/image/upload/v1636385985/stash/Admin/Web/s3.png"
						onClick={() => {
							setCurrentImage('stash/Admin/Web/s3');
							setShowImageViewer(true);
						}}
					/>
					<figcaption>click on image for zoom-in view</figcaption>
				</figure>
				<figure>
					<img
						className="home-img"
						src="https://res.cloudinary.com/dfkw9hdq3/image/upload/v1636385985/stash/Admin/Web/s2.png"
						onClick={() => {
							setCurrentImage('stash/Admin/Web/s2');
							setShowImageViewer(true);
						}}
					/>
					<figcaption>click on image for zoom-in view</figcaption>
				</figure>
			</div>
			<p>
				By clicking on your profile avatar and choosing settings, you can
				<span className="highlight"> customize your own banner</span> as well as{' '}
				<span className="highlight"> switch to light or dark theme</span>You can
				also <span className="highlight"> keep memos on a calender</span> and
				change the default avatar to{' '}
				<span className="highlight">your own custom avatar</span>
			</p>
			<p>
				We hope you enjoy this application and please send us some feedback!
			</p>
			<ImageViewer
				imageSrc={currentImage}
				showViewer={showImageViewer}
				closeViewer={() => setShowImageViewer(false)}
			/>
		</div>
	);
};
