import React from 'react';
import { Chip } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

function ServiceDialogChip(props) {
	const [ open, setOpen ] = React.useState(false);
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

	const handleClick = (event) => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Chip size="small" icon={<WorkIcon />} variant="outlined" label={props.label} onClick={handleClick} />

			<Dialog fullScreen={fullScreen} open={open} onClose={handleClose} aria-labelledby="responsive-dialog-title">
				<DialogTitle id="responsive-dialog-title">{props.label}</DialogTitle>
				<DialogContent>
					<DialogContentText>Services details TBD</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary" autoFocus>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default ServiceDialogChip;
