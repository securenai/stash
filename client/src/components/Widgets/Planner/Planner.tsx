import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
	today,
	getPlannerData,
	initYearData,
	getMonthNameAt,
	getDayArrayForMonthOfYear
} from './plannerUtils';

const CalenderContainer = styled.div`
	font-family: 'Calamity-Regular';
	padding: 20px 10px;
	border-radius: 10px;
	/* width: 600px; */
	background-color: ${({ theme }) => theme.colors.secondary};
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const CalenderHeader = styled.div`
	display: flex;
	width: 100%;
    justify-content: center;
`;
const CalenderBody = styled.div`
	display: flex;
	flex-wrap: wrap;
	/* width: 575px; */
	width: 365px;
	color: #221f1f;
	justify-content: center;
`;
const DayGrid = styled.div`
	/* height: 80px;
	width: 80px; */
	height: 50px;
	width: 50px;
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
const PlannerContainer = styled.div`
	display: flex;
`;
const Schedule = styled.div`
	background-color: ${({ theme }) => theme.colors.secondary};
	/* background-color: #221f1f; */
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const CalenderHeaderCenter = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px;
`;
const CalenderHeaderLeft = styled.div`
	width: 100%;
`;
const CalenderHeaderRight = styled.div`
	width: 100%;
    text-align: right;
	
`;
const Next = styled.span`
	cursor: pointer;
	&:hover{
		color: #7f8375
	}
`;
const Prev = styled.span`
	cursor: pointer;
	&:hover{
		color: #7f8375
	}
`;

export interface PlannerProps {}

const Planner: React.FC<PlannerProps> = () => {
	// console.log(today().month);
	const [calenderData, setCalenderData] = useState([])
	const [data, setData] = useState([]);
	const [currentDate, setCurrentDate] = useState({year:today().year, month:today().month ,day:today().day});
	useEffect(() => {
		// setCurrentDate({year:today().year, month:today().month ,day:today().day});
		const plannerData = getDayArrayForMonthOfYear(new Date().getFullYear());
		
		// const plannerData =
		// 	localStorage.getItem('plannerData') === null
		// 		? getPlannerData()
		// 		: JSON.parse(localStorage.getItem('plannerData'));
		setCalenderData(plannerData)
		setData(plannerData[currentDate.month - 1]);
		console.log(currentDate.month);
	}, []);

	// console.log(getPlannerYear());

	return (
		<PlannerContainer>
			<CalenderContainer>
				<CalenderHeader>
					<CalenderHeaderLeft>
						<Prev onClick={()=>{
							if(currentDate.month >= 2) {
								setCurrentDate({year:currentDate.year, month:currentDate.month-1 ,day:1})
								setData(calenderData[currentDate.month-2]);
							}
						}}>prev</Prev>
					</CalenderHeaderLeft>
					<CalenderHeaderCenter>
						<div>{currentDate.day}</div>
						<div>{getMonthNameAt(currentDate.month).toUpperCase()}</div>
					</CalenderHeaderCenter>
					<CalenderHeaderRight>
						<Next onClick={()=>{
							console.log(currentDate.month)
							if(currentDate.month <= 11) {
								setCurrentDate({year:currentDate.year, month:currentDate.month+1 ,day:1})
								setData(calenderData[currentDate.month]);
							}
						}}>next</Next>
					</CalenderHeaderRight>
				</CalenderHeader>
				<CalenderBody>
					{data.map((day, index) => {
						return (
							<DayGrid key={index.toString()}>
								<DayNumber>{day !== 0 && day}</DayNumber>
							</DayGrid>
						);
					})}
				</CalenderBody>
			</CalenderContainer>
			<Schedule>
				<div>September 2, 2021</div>
			</Schedule>
		</PlannerContainer>
	);
};

export default Planner;
