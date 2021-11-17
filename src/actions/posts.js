import * as api from '../api';

//action creators

 export const getPosts = () => async (dispatch) => {
    try {
 
        const { data } = await api.fetchPosts()
        return dispatch({ type: 'FETCH_ALL' , payload: data })

    } catch (error) {
        console.log( { error: error.message } )
    }
 
}

export const createPost = (post) => async (dispatch) => {
    try {

        const { data } = await api.createPost(post)
        

        dispatch({ type: 'CREATE' , payload: data })

    } catch (error) {
        
        console.log(`error is from here: ${error.message}`)

    }
}

export const updatePost = ( id , post ) => async (dispatch) => {
    try {
         
         const { data }  = await api.updatePost( id , post ) 
         
         dispatch({ type: 'UPDATE' , payload: data })

    } catch(e) {
        console.log(e.message)
    }
}

export const deletePost = ( id ) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch( { type: 'DELETE' , payload: id })
    } catch(e){
        console.log(e)
    }
}

export const likePost = ( id ) => async ( dispatch ) => {
    try {
        const {data} = await api.likePost(id);

        dispatch( { type: 'UPDATE' , payload: data})
    } catch (error) {
        console.log(error)
    }
}


