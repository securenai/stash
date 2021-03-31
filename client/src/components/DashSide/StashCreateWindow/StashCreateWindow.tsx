import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import './style.css';
import {
	ChnCreateInput,
	ChnCreateTitle,
	ChnCreateDialogTitle,
	ChnCreateInputHash,
	ChnCreateInputField
} from './style.js';
import {
	ChnDelDialog,
	ChnDelDialogPromptQues,
	ChnDelBtnActions,
	ChnDelBtn
} from './style.js';

const ChannelCreate = ({ closeCreate }) => {
	const [channelName, setChannelName] = useState('');

	return (
		<Dialog
			open={true}
			onClose={closeCreate}
			aria-labelledby="alert-dialog-title"
			aria-describedby="alert-dialog-description">
			<ChnDelDialog>
				<DialogTitle>
					<ChnCreateDialogTitle>{'Create Stash'}</ChnCreateDialogTitle>
				</DialogTitle>

				<DialogContent>
					<ChnDelDialogPromptQues>
						{/* <div>Are you sure you want to delete #{channelName} channel?</div> */}
						<ChnCreateTitle>Stash Name</ChnCreateTitle>
						<ChnCreateInput>
							<ChnCreateInputHash>#</ChnCreateInputHash>
							<ChnCreateInputField
								autoFocus
								type="text"
								maxLength="999"
								value={channelName}
								onChange={(e) => {
									setChannelName(e.target.value);
								}}
							/>
						</ChnCreateInput>
					</ChnDelDialogPromptQues>
				</DialogContent>

				<ChnDelBtnActions>
					<DialogActions>
						<Button onClick={closeCreate} color="primary">
							<ChnDelBtn>Cancel</ChnDelBtn>
						</Button>
						<Button color="primary" autoFocus>
							<ChnDelBtn>Create</ChnDelBtn>
						</Button>
					</DialogActions>
				</ChnDelBtnActions>
			</ChnDelDialog>
		</Dialog>
	);
};

export default ChannelCreate;
