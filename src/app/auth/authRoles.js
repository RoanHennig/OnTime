/**
 * Authorization Roles
 */
const authRoles = {
    admin    : ['admin'],
    staff    : ['admin', 'staff'],
    user     : ['admin', 'staff', 'user','newBusinessOwner'],
    newBusinessOwner: ['newBusinessOwner'],
    onlyGuest: []
};

export default authRoles;
