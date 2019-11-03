import React from 'react';
import { Popover, Typography, Chip } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2)
	}
}));

function ServiceItemChip(props) {
	const classes = useStyles();
	const [ anchorEl, setAnchorEl ] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<div>
			<Chip size="small" icon={<WorkIcon />} variant="outlined" label={props.label} onClick={handleClick} />
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center'
				}}
			>
				<Typography className={classes.typography}> Services details TBD</Typography>
			</Popover>
		</div>
	);
}

export default ServiceItemChip;
