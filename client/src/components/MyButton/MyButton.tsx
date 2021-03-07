import React from 'react';
import './MyButton.css';

export interface MyButtonProps {}

const MyButton: React.FC<MyButtonProps> = () => {
	return <div className="my_btn">Click the Button!!</div>;
};

export default MyButton;
