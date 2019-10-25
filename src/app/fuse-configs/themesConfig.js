import { red } from '@material-ui/core/colors';

const themesConfig = {
	default: {
		palette: {
			type: 'light',
			primary: {
				light: '#b0bec5',
				main: '#b0bec5',
				dark: '#78909c'
			},
			secondary: {
				light: '#e8305f',
				main: '#d22a5b',
				dark: '#bd2458',
				contrastText: '#FFF'
			},
			error: red
		},
		status: {
			danger: 'orange'
		}
	}
};

export default themesConfig;
