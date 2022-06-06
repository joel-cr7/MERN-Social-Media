// These actions will be called according to the conditions of Login
// and passed on to the Reducer

export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
});


export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
});


export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error
});


export const Follow = (userId) => ({
    type: "FOLLOW",
    payload: userId
});


export const Unfollow = (userId) => ({
    type: "UNFOLLOW",
    payload: userId
});
