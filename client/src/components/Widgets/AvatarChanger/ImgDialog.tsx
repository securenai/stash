import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

const styles = {
	appBar: {
		position: 'relative'
	},
	flex: {
		flex: 1
	},
	imgContainer: {
		position: 'relative',
		flex: 1,
		padding: 16,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	img: {
		maxWidth: '100%',
		maxHeight: '100%'
	}
};

// function Transition({props}) {
//   return <Slide direction="up" {...props} />
// }

export interface ImgDialogProps {
	img: any;
	onClose: any;
}

const ImgDialog: React.FC<ImgDialogProps> = ({ img, onClose }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Dialog
			fullScreen
			open={!!img}
			onClose={onClose}
			// TransitionComponent={Transition}
		>
			{/* <AppBar className="appBar">
				<Toolbar>
					<IconButton color="inherit" onClick={onClose} aria-label="Close">
						<CloseIcon />
					</IconButton>
					<Typography
						//   variant="title"
						color="inherit"
						className="flex">
						Cropped image
					</Typography>
				</Toolbar>
			</AppBar> */}
			<div className={'imgContainer'}>
				<img src={img} alt="Cropped" className="img" />
			</div>
		</Dialog>
	);
};

export default ImgDialog;
