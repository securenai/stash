import React from 'react';
import './Footer.css';
import styled from 'styled-components';

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => (
	<div className="page_footer">
		<div className="page_footer_text">
			stack application by zhengnaishiuan. | &copy; 2021 Stash
		</div>
	</div>
);
