// Based on the actions performed the reducer 
// will return the new updated state

const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
                error: false
            };
        
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };

        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload
            };

        case "FOLLOW":
            return {
                ...state,  //take all previous state properties as it is

                // only change user property as below
                user: {
                    ...state.user,  //take all properties of user from previous state
                    //only change following property of user to add another user
                    following: [...state.user.following, action.payload]
                }
            };

        case "UNFOLLOW":
            return {
                ...state,  //take all previous state properties as it is

                // only change user property as below
                user: {
                    ...state.user,  //take all properties of user from previous state
                    //only change following property of user to remove a user
                    following: state.user.following.filter(
                        (f) => f!==action.payload
                    )
                }
            };

        default:
            return state;
    }
}

export default AuthReducer;