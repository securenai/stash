import React, { useState } from 'react';
import './Footer.css';

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	const [footerTitle, setFooterTitle] = useState('im the footer!');

	return <div className="component_footer">{footerTitle}</div>;
};

export default Footer;
