import axios from 'axios';

export const UpdateLikeArray = (PostArray) => {
    // console.log(PostArray);
    return {
        type: "LIKE_UPDATE",
        likeArray: PostArray
    }
}

export const UpdateDislikeArray = (PostArray) => {
    // console.log(PostArray);
    return {
        type: "DISLIKE_UPDATE",
        likeArray: PostArray
    }
}

const postLoading = () => {
    return {
        type: "POST_LOADING"
    }
}

const postSuccess = (data) => {
    return {
        type: "POST_SUCCESS",
        data: data
    }
}

const postError = (err) => {
    return {
        type: "POST_ERROR",
        err: err
    }
}

export const GetUserData = () => {
    return (dispatch) => {
        dispatch(postLoading())
        axios.get('https://randomuser.me/Api?gender=female')
        .then((response) => {
            dispatch(postSuccess(response.data))
        })
        .catch((err) => {
            dispatch(postError(err))
        })
    }
} 
// export const getUserData = () => {
    
//     return {
//         type: "GET_USER",
//         userData: userData
//     }
// }