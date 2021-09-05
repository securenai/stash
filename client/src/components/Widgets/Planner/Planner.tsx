import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { setLocalStorage } from '../../../api/utils/localStorageUtils';
import { selectUserPlanner, setUserPlanner } from '../../../slices/userSlice';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { useDispatch } from 'react-redux';

import {
	today,
	getPlannerData,
	initYearData,
	getMonthNameAt,
	getDayArrayForMonthOfYear
} from './plannerUtils';
import IconButtonEdit from '../Button/IconButtons/IconButtonEdit';
import { CrudButton } from '../Button/CrudButtons/CrudButton';

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
interface DayGridProps {
	isToday: boolean;
	isSelectedDay: boolean;
}
const DayGrid = styled.div<DayGridProps>`
	/* height: 80px;
	width: 80px; */
	height: 50px;
	width: 50px;
	border: 1px solid;
	font-size: 12px;
	cursor: pointer;
	background-color: ${(props) =>
		props.isSelectedDay ? '#bccedd' : props.isToday ? '#ddd8bc' : 'lightcoral'};
	&:hover {
		background-color: #ddbcc2;
	}
`;
const DayNumber = styled.div`
	padding: 5px;
`;
const PlannerContainer = styled.div`
	padding: 20px;
	display: flex;
`;
const Schedule = styled.div`
	background-color: ${({ theme }) => theme.colors.secondary};
	/* background-color: #221f1f; */
	font-family: 'Calamity-Regular';
	/* width: 380px; */
	width: 70%;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	margin: 0px 10px;
	min-width: 400px;
`;
const ScheduleHeader = styled.div`
	text-align: center;
	border-bottom: 1px solid;
	padding: 10px;
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
const NameOfDays = styled.div``;
const Next = styled.span`
	cursor: pointer;
	&:hover {
		color: #7f8375;
	}
`;
const Prev = styled.span`
	cursor: pointer;
	&:hover {
		color: #7f8375;
	}
`;
const DayName = styled.span`
	display: inline-block;
	font-size: 10px;
	width: 52px;
	text-align: center;
`;
const Task = styled.div`
	padding: 5px;
	display: flex;
	/* justify-content: center; */
	align-items: center;
	border-bottom: 1px solid;

	/* background-color: #cacaa0dd; */
`;
const TaskName = styled.div`
	width: 100%;
`;
const TaskInput = styled.input`
	color: ${({ theme }) => theme.fontColors.primary};
`;

export interface PlannerProps {}

const Planner: React.FC<PlannerProps> = () => {
	const dispatch = useDispatch();
	const userPlanner = useSelector(selectUserPlanner);
	const [calenderData, setCalenderData] = useState([]);
	const [data, setData] = useState([]);
	const [year, setYear] = useState(today().year);
	const [month, setMonth] = useState(today().month);
	const [day, setDay] = useState(today().day);
	const [currentDate, setCurrentDate] = useState({
		year,
		month,
		day
	});
	const [selectedDay, setSelectedDay] = useState(
		moment(new Date()).format('YYYYMMDD')
	);
	const [selectedDayTasks, setSelectedDayTasks] = useState([]);
	const [currentTask, setCurrentTask] = useState('');
	const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

	useEffect(() => {
		const plannerData =
			userPlanner || getDayArrayForMonthOfYear(new Date().getFullYear());

		setCalenderData(plannerData);
		setData(plannerData[currentDate.month - 1]);
		plannerData[currentDate.month - 1].forEach((dayItem) => {
			if (dayItem !== 0 && dayItem[0] === today().day) {
				setSelectedDayTasks(dayItem[1].plans);
			}
		});
	}, []);

	useEffect(() => {
		setCurrentTaskIndex(null);
		if (calenderData.length > 0) {
			calenderData[currentDate.month - 1].forEach((dayItem) => {
				if (dayItem !== 0 && dayItem[0] === currentDate.day) {
					setSelectedDayTasks(dayItem[1].plans);
				}
			});
		}
	}, [selectedDay]);

	useEffect(() => {
		if (selectedDayTasks.length > 0) {
			setSelectedDayTasks(selectedDayTasks);
			dispatch(setUserPlanner(calenderData));
			setLocalStorage({
				userPlanner: calenderData
			});
		}
	}, [selectedDayTasks]);

	const isToday = (year: number, month: number, day: number) => {
		const date =
			year.toString() +
			month.toString().padStart(2, '0') +
			day.toString().padStart(2, '0');
		const today = moment(new Date()).format('YYYYMMDD');
		return date === today;
	};

	const isSelectedDay = (year: number, month: number, day: number) => {
		const date =
			year.toString() +
			month.toString().padStart(2, '0') +
			day.toString().padStart(2, '0');
		return date === selectedDay;
	};

	const setDayToSelected = (year: number, month: number, day: number) => {
		const date =
			year.toString() +
			month.toString().padStart(2, '0') +
			day.toString().padStart(2, '0');
		setSelectedDay(date);
		setCurrentDate({ year, month, day });
	};

	const handleChangeMonth = (dir: string) => {
		if (dir === 'left') {
			setMonth(month - 1);
			const date =
				year.toString() + (month - 1).toString().padStart(2, '0') + '01';
			setSelectedDay(date);
			setCurrentDate({
				year: currentDate.year,
				month: currentDate.month - 1,
				day: 1
			});
			setData(calenderData[currentDate.month - 2]);
		} else if (dir === 'right') {
			setMonth(month + 1);
			const date =
				year.toString() + (month + 1).toString().padStart(2, '0') + '01';
			setSelectedDay(date);
			setMonth(month + 1);
			setCurrentDate({
				year: currentDate.year,
				month: currentDate.month + 1,
				day: 1
			});
			setData(calenderData[currentDate.month]);
		}
	};

	const handleChangeTaskInput = (val: string) => {
		setCurrentTask(val);
	};

	const handleSavePlanner = (copy) => {
		const copyCalenderData = _.cloneDeep(calenderData);
		if (copyCalenderData[currentDate.month - 1].length > 0) {
			copyCalenderData[currentDate.month - 1].forEach((dayItem) => {
				if (dayItem !== 0 && dayItem[0] === currentDate.day) {
					dayItem[1].plans = copy;
				}
			});
		}
		setCalenderData(copyCalenderData);
	};

	return (
		<PlannerContainer>
			<CalenderContainer>
				<CalenderHeader>
					<CalenderHeaderLeft>
						<Prev
							onClick={() => {
								if (currentDate.month >= 2) handleChangeMonth('left');
							}}>
							prev
						</Prev>
					</CalenderHeaderLeft>
					<CalenderHeaderCenter>
						<div>{currentDate.day}</div>
						<div>{getMonthNameAt(currentDate.month).toUpperCase()}</div>
					</CalenderHeaderCenter>
					<CalenderHeaderRight>
						<Next
							onClick={() => {
								if (currentDate.month <= 11) handleChangeMonth('right');
							}}>
							next
						</Next>
					</CalenderHeaderRight>
				</CalenderHeader>
				<NameOfDays>
					{['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((name) => {
						return <DayName key={name}>{name}</DayName>;
					})}
				</NameOfDays>
				<CalenderBody>
					{data.map((day, index) => {
						const d = day === 0 ? [0] : day;
						return (
							<DayGrid
								key={index.toString()}
								isToday={isToday(year, currentDate.month, d[0])}
								isSelectedDay={isSelectedDay(year, currentDate.month, d[0])}
								onClick={() => {
									day !== 0 && setDayToSelected(year, currentDate.month, d[0]);
								}}>
								<DayNumber>{day !== 0 && d[0]}</DayNumber>
							</DayGrid>
						);
					})}
				</CalenderBody>
			</CalenderContainer>
			<Schedule>
				<ScheduleHeader>
					{getMonthNameAt(month)} {currentDate.day}, {year}
				</ScheduleHeader>
				<div>
					{/* <button>add task</button> */}
					{/* <div>{selectedDayTasks.length}</div> */}
					{selectedDayTasks.length > 0 &&
						selectedDayTasks.map((task, index) => {
							return (
								<Task key={index.toString()}>
									<div>
										{currentTaskIndex === index ? (
											<div></div>
										) : (
											<IconButtonEdit
												onClick={() => {
													setCurrentTaskIndex(index);
													setCurrentTask(selectedDayTasks[index]);
												}}
											/>
										)}
									</div>
									<TaskName>
										{index === currentTaskIndex ? (
											<div>
												<TaskInput
													value={currentTask}
													autoFocus
													onChange={(e) => {
														handleChangeTaskInput(e.target.value);
													}}
												/>
											</div>
										) : (
											<div>{task}</div>
										)}
									</TaskName>
									{index === currentTaskIndex ? (
										<>
											<div>
												<CrudButton
													crudType="save"
													label="Save"
													size="small"
													onClick={() => {
														setCurrentTaskIndex(null);
														setCurrentTask(currentTask);
														const copy = _.cloneDeep(selectedDayTasks);
														copy[currentTaskIndex] = currentTask;
														setSelectedDayTasks(copy);
														handleSavePlanner(copy);
													}}
												/>
											</div>
											<div>
												<CrudButton
													crudType="delete"
													label="Delete"
													size="small"
												/>
											</div>
										</>
									) : null}
								</Task>
							);
						})}
				</div>
			</Schedule>
		</PlannerContainer>
	);
};

export default Planner;
