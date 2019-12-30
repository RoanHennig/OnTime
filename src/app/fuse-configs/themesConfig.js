import { red } from '@material-ui/core/colors';

const themesConfig = {
	default: {
		palette: {
			type: 'light',
			primary: {
				light: '#a9c2cf',
				main: '#8aa9b9',
				dark: '#7295a7',
				verydark: '#455a64',
				contrastText: '#FFF'
			},
			secondary: {
				light: '#c87a7b',
				main: '#d0605e',
				dark: '#d3544b',
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
