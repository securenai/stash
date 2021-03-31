import styled from 'styled-components';

export const ChnDelDialog = styled.div`
	background-color: #36393f;
	border-radius: 5px;
`;

export const ChnDelDialogTitle = styled.span`
	color: white;
	font-size: 15px;
	font-weight: 900;
`;

export const ChnDelDialogPromptQues = styled.span`
	color: #dcddde;
	font-size: 14px;
`;

export const ChnDelTarget = styled.div`
	border: 1px solid #2f3136;
	box-shadow: 0 0 0 1px rgb(32 34 37 / 60%), 0 2px 10px 0 rgb(0 0 0 / 20%);
	position: relative;
	border-radius: 3px;
	overflow: hidden;
	padding-top: 10px;
	padding-bottom: 10px;
	margin: 15px 0px;
`;

export const ChnDelTargetContainer = styled.div`
	padding: 10px;
	display: flex;
`;

export const ChnDelTargetContent = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0px 15px;
`;

export const ChnDelTargetContentName = styled.span`
	color: white;
	font-size: 15px;
`;

export const ChnDelTargetContentDate = styled.span`
	color: gray;
	margin-left: 10px;
	font-size: x-small;
`;

export const ChnDelTargetContentChn = styled.div`
	color: white;
	font-size: 15px;
`;

export const ChnDelBtnActions = styled.div`
	background-color: #2f3136;
`;

export const ChnDelBtn = styled.div`
	color: white;
`;

export const ChnCreateInput = styled.div`
	display: flex;

	padding-left: 10px;
	padding-right: 10px;
	height: 40px;
	font-size: 16px;
	width: 90%;
	border-radius: 3px;
	color: #dcddde;
	outline: 0;
	background-color: rgba(0, 0, 0, 0.1);
	border: 1px solid rgba(0, 0, 0, 0.3);
	transition: border-color 0.2s ease-in-out;
	&:hover {
		border-color: #000000;
	}
	&:focus {
		border-color: #7289da;
	}
`;

export const ChnCreateTitle = styled.h5`
	color: #8e9297;
	margin-bottom: 8px;
	font-size: 12px;
	line-height: 16px;
	font-weight: 600;
	text-transform: uppercase;
`;

export const ChnCreateDialogTitle = styled.span`
	color: white;
	font-size: 20px;
	font-weight: 900;
	text-align: center;
`;

export const ChnCreateInputField = styled.input`
	background: transparent;
	outline-width: 0;
	color: white;
	border: none;
	font-size: 16px;
	width: 100%;
`;

export const ChnCreateInputHash = styled.div`
	align-self: center;
	font-size: 24px;
	padding-right: 5px;
`;
