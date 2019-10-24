import {red} from '@material-ui/core/colors';

const themesConfig = {
    default    : {
        palette: {
            type     : 'light',
            primary  : {
                light: '#D64747',
                main : '#c94242',
                dark : '#B03A3A'
            },
            secondary: {
                light       : '#87EFFF',
                main        : '#109cc7',
                dark        : '#008CB7',
                contrastText: '#FFF'
            },
            error    : red
        },
        status : {
            danger: 'orange'
        }
    }
};

export default themesConfig;
