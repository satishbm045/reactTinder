// const defaultData = []

export const userDataReducer = (userData = { 
        loading: false, 
        posts: null, 
        error: null 
    }, action) => {

    switch (action.type) {
        case "POST_LOADING": return {...userData, loading: true}
        case "POST_SUCCESS": return {...userData, loading: false, posts: action.data}
        case "POST_ERROR": return {...userData, loading: false, error: action.err}
        default: return userData;
    }

}

const defaultlikeArray = []

export const LikedDataReducer = (instaList = defaultlikeArray, action) => {
    switch(action.type){
        case "LIKE_UPDATE" : const tempPostArray = instaList;
        tempPostArray.push(action.likeArray);
        console.log(action.instalist);
        console.log(tempPostArray);
        // instaList = tempPostArray;
        return tempPostArray;
        default: return instaList;
    }

}

const defaultDislikeArray = []

export const DislikedDataReducer = (instaList = defaultDislikeArray, action) => {
    switch(action.type){
        case "DISLIKE_UPDATE" : const tempPostArray = instaList;
        tempPostArray.push(action.likeArray);
        console.log(action.instalist);
        console.log(tempPostArray);
        // instaList = tempPostArray;
        return tempPostArray;
        default: return instaList;
    }

}