let API_BASE_URL = 'https://fierce-castle-51374.herokuapp.com/api';
let AUTH = API_BASE_URL + '/auth';
let STAFF = API_BASE_URL + '/staff'
let ADMIN = AUTH + '/users'
let LOGIN = AUTH + '/login';
let LOGOUT = AUTH + '/logout';


export const CONSTANTS = {
    'API_BASE_URL': API_BASE_URL,
    'AUTH': AUTH,
    'LOGIN': LOGIN,
    'STAFF': STAFF,
    'ADMIN': ADMIN,
    'LOGOUT': LOGOUT
};
