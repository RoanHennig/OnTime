import axios from 'axios';
import auth0Service from 'app/services/auth0Service';

export const GET_TEST = '[EXAMPLE APP] GET TEST';


export function getTest()
{
    const request = axios.get('api/weatherforecast/stuff' ,{
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': 'Bearer ' + auth0Service.getAccessToken(),
            
        }
    });

    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_TEST,
                payload: response.data
            })
        );
}