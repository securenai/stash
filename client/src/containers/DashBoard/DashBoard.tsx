import React from 'react';

export interface DashBoardProps {}

const DashBoard: React.FC<DashBoardProps> = () => {
	return (
		<div>
			this is dashboard!! it means u logged in!!!
			<div>your info</div>
			<div>username : </div>
			<div>welcome</div>
		</div>
	);
};

export default DashBoard;
