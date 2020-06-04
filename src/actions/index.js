import * as actionTypes from './types'
/* Users Actions */
export const setUser = user =>{
    return{
        type: actionTypes.SET_USER,
        payload:{
            currentUser:user
        }
    }
}

export const clearUser = () =>{
    return  {
        type: actionTypes.CLEAR_USER
    }
}

/* Channels Actions */

export const setCurrentChannel =channel=>{
    return{
        type: actionTypes.SET_CURRENT_CHANNEL,
        payload: {
            currentChannel: channel
        }
    }
}

/* Private Channel Actions */

export const setPrivateChannel = isPrivateChannel =>{
    return {
        type: actionTypes.SET_PRIVATE_CHANNEL,
        payload: {
            isPrivateChannel
        }
    }
}

/* Set User Posts Action */

export const setUserPosts = userPosts =>{
    return{
        type: actionTypes.SET_USER_POSTS,
        payload: {
            userPosts
        }
    }
}

/* COLORS ACTIONS */

export const setColors =(primaryColor, secondaryColor)=>{
    return {
        type:actionTypes.SET_COLORS,
        payload:{
            primaryColor,
            secondaryColor
        }
    }
}
    