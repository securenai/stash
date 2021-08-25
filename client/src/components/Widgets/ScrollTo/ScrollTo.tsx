import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';

export interface ScrollToProps {
	click: () => void;
}

const useStyles = makeStyles((theme) => ({
	toTop: {
		zIndex: 1,
		position: 'fixed',
		bottom: '2vh',
		backgroundColor: '#DCDCDC',
		color: 'black',
		'&:hover, &.Mui-focusVisible': {
			transition: '0.3s',
			color: '#397BA6',
			backgroundColor: '#DCDCDC'
		},
		[theme.breakpoints.up('xs')]: {
			right: '5%',
			backgroundColor: 'rgb(220,220,220,0.7)'
		},
		[theme.breakpoints.up('lg')]: {
			right: '1.5%'
		}
	}
}));

const ScrollTo: React.FC<ScrollToProps> = ({ click }) => {
	const classes = useStyles();
	return (
		<div>
			<IconButton
				onClick={click}
				className={classes.toTop}
				aria-label="to top"
				component="span">
				<ExpandLessIcon />
			</IconButton>
		</div>
	);
};

export default ScrollTo;
