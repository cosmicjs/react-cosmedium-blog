export const FetchPostsApi = () => {
    return (dispatch) => {
            const Cosmic = require('cosmicjs')
            var api = new Cosmic();
            var bucket = api.bucket({
              slug:'ec055990-f24c-11e8-9231-9b47e8f95b7e'
            })
            bucket.getObjects().then(data => {
            console.log("Action creator from:", data);
          
            dispatch({type:"FETCH_POSTS", data:data});            
            }).catch(err => {
              console.log(err)
            })

    }
}