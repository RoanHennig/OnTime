import React from 'react';
import { Button } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { withStyles } from '@material-ui/core/styles';
import { green, red, blue, grey } from '@material-ui/core/colors';

const options = [
	{
		text: 'Scheduled',
		color: blue
	},
	{
		text: 'Arrived',
		color: green
	},
	{
		text: 'No Show',
		color: red
	},
	{
		text: 'Cancelled',
		color: red
	}
];

function AppointmentDetailsAppSidebarContent(props) {
	const [ open, setOpen ] = React.useState(false);
	const [ appointmentStatusButtonColor, setAppointmentStatusButtonColor ] = React.useState(blue);

	const anchorRef = React.useRef(null);
	const [ selectedIndex, setSelectedIndex ] = React.useState(0);

	const ColorButton = withStyles((theme) => ({
		root: {
			color: grey[50],
			backgroundColor: appointmentStatusButtonColor[400],
			'&:hover': {
				backgroundColor: appointmentStatusButtonColor[600]
			},
			borderRight: '1px solid ' + appointmentStatusButtonColor[400] + '!important'
		}
	}))(Button);

	const handleMenuItemClick = (event, index) => {
		setSelectedIndex(index);
		setAppointmentStatusButtonColor(options[index].color);
		setOpen(false);
	};

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	};

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={200}>
			<div className="flex-auto border-l-1 relative">
				<div className="pt-20 pl-20 pr-20">
					<ButtonGroup
						ref={anchorRef}
						className="w-full"
						variant="contained"
						color="primary"
						aria-label="split button"
					>
						<ColorButton className="w-full" onClick={handleToggle}>
							{options[selectedIndex].text}
						</ColorButton>
						<ColorButton
							color="primary"
							size="small"
							aria-controls={open ? 'split-button-menu' : undefined}
							aria-expanded={open ? 'true' : undefined}
							aria-label="select merge strategy"
							aria-haspopup="menu"
							onClick={handleToggle}
						>
							<ArrowDropDownIcon />
						</ColorButton>
					</ButtonGroup>
					<Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
						{({ TransitionProps, placement }) => (
							<Grow
								{...TransitionProps}
								style={{
									transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'
								}}
							>
								<Paper>
									<ClickAwayListener onClickAway={handleClose}>
										<MenuList id="split-button-menu">
											{options.map((option, index) => (
												<MenuItem
													key={option.text}
													selected={index === selectedIndex}
													onClick={(event) => handleMenuItemClick(event, index)}
												>
													{option.text}
												</MenuItem>
											))}
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						)}
					</Popper>
				</div>

				<div className="pt-20 pl-20 pr-20 mb-32 absolute bottom-0 w-full">
					<Button variant="contained" color="secondary" className="w-full" startIcon={<ShoppingCartIcon />}>
						CHECKOUT
					</Button>
				</div>
			</div>
		</FuseAnimate>
	);
}

export default AppointmentDetailsAppSidebarContent;
