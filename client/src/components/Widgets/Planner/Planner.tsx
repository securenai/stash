import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	today,
	getPlannerData,
	initYearData,
	getMonthNameAt,
	getDayArrayForMonthOfYear
} from './plannerUtils';

const PlannerContainer = styled.div`
	font-family: 'Calamity-Regular';
	padding: 20px 10px;
	border-radius: 10px;
	width: 600px;
	background-color: ${({ theme }) => theme.colors.secondary};
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const PlannerHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
`;
const PlannerBody = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 575px;
	color: #221f1f;
	justify-content: center;
`;
const DayGrid = styled.div`
	height: 80px;
	width: 80px;
	border: 1px solid;
	font-size: 12px;
	cursor: pointer;
	background-color: lightcoral;
	&:hover {
		background-color: #c9bbbb;
	}
`;
const DayNumber = styled.div`
	padding: 5px;
`;

export interface PlannerProps {}

const Planner: React.FC<PlannerProps> = () => {
	// console.log(today().month);
	const [data, setData] = useState([]);
	useEffect(() => {
		const plannerData = getDayArrayForMonthOfYear(new Date().getFullYear());
		console.log(plannerData);
		// const plannerData =
		// 	localStorage.getItem('plannerData') === null
		// 		? getPlannerData()
		// 		: JSON.parse(localStorage.getItem('plannerData'));
		setData(plannerData[today().month - 1]);
	}, []);

	// console.log(getPlannerYear());

	return (
		<PlannerContainer>
			<PlannerHeader>
				<div>{today().day}</div>
				<div>{getMonthNameAt(today().month).toUpperCase()}</div>
			</PlannerHeader>
			<PlannerBody>
				{data.map((day, index) => {
					return (
						<DayGrid key={index.toString()}>
							<DayNumber>{day !== 0 && day}</DayNumber>
						</DayGrid>
					);
				})}
			</PlannerBody>
		</PlannerContainer>
	);
};

export default Planner;
