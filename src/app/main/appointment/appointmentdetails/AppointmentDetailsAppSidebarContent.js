import React, { useEffect } from 'react';
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
import { green, red, blue, grey, yellow } from '@material-ui/core/colors';

const options = [
	{
		id: 0,
		text: 'Scheduled',
		color: blue,
		standard: 400,
		hover: 600,
		hide: false
	},
	{
		id: 1,
		text: 'Arrived',
		color: green,
		standard: 400,
		hover: 600,
		hide: false
	},
	{
		id: 2,
		text: 'No Show',
		color: red,
		standard: 400,
		hover: 600,
		hide: false
	},
	{
		id: 3,
		text: 'Cancelled',
		color: red,
		standard: 400,
		hover: 600,
		hide: false
	},
	{
		id: 4,
		text: 'Processed',
		color: yellow,
		standard: 700,
		hover: 900,
		hide: true
	}
];

function AppointmentDetailsAppSidebarContent(props) {
	const [ open, setOpen ] = React.useState(false);
	const [ appointmentStatusButtonColor, setAppointmentStatusButtonColor ] = React.useState(options[0]);

	const anchorRef = React.useRef(null);
	const [ selectedIndex, setSelectedIndex ] = React.useState(0);

	const ColorButton = withStyles((theme) => ({
		root: {
			color: grey[50],
			backgroundColor: appointmentStatusButtonColor.color[appointmentStatusButtonColor.standard],
			'&:hover': {
				backgroundColor: appointmentStatusButtonColor.color[appointmentStatusButtonColor.hover]
			},
			borderRight:
				'1px solid ' + appointmentStatusButtonColor.color[appointmentStatusButtonColor.standard] + '!important'
		}
	}))(Button);

	const handleMenuItemClick = (event, index) => {
		setSelectedIndex(index);
		setAppointmentStatusButtonColor(options[index]);
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

	useEffect(
		() => {
			const index = options.find((x) => x.text === props.appointmentStatus).id;
			setSelectedIndex(index);
			setAppointmentStatusButtonColor(options[index]);
		},
		[ options, setSelectedIndex, setAppointmentStatusButtonColor ]
	);

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
													hidden={option.hide}
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
