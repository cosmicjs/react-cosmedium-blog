export const FetchPostsApi = () => {
    return (dispatch) => {
            const Cosmic = require('cosmicjs')
            var api = new Cosmic();
            var bucket = api.bucket({
              slug: process.env.REACT_APP_COSMIC_BUCKET || 'react-cosmedium-blog',
              read_key: process.env.REACT_APP_COSMIC_READ_KEY || ''
            })
            bucket.getObjects().then(data => {          
            dispatch({type:"FETCH_POSTS", data:data});            
            }).catch(err => {
              console.log(err)
            })

    }
}