import { red } from '@material-ui/core/colors';

const themesConfig = {
	default: {
		palette: {
			type: 'light',
			primary: {
				light: '#ec4d53',
				main: '#d95162',
				dark: '#cf374a'
			},
			secondary: {
				light: '#53bbb5',
				main: '#30aca4',
				dark: '#159085',
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
