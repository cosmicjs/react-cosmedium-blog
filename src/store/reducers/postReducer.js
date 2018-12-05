const initState = {
  posts: [] ,
  categories: [],
  ads:[],
  category: [],
  link: null,
  newList:[],
  value:'',
}
const postReducer = (state = initState, action) => {
 
    switch(action.type) {
        case 'FETCH_POSTS': 
      
        const posts = action.data.objects.filter(item => {
            return(item.type_slug === "posts") 
          });
         
        return{
            ...state,
            posts: posts,
            categories: action.data.objects.filter(cat => {
                return(cat.type_slug === "categories") 
              }),
              ads: action.data.objects.find(name => {
                return(name.type_slug === "ads") 
              }),
            link: action.data.objects.find(name => {
              return(name.type_slug === "ads") 
            })
        }
        case 'SEARCH_INPUT':
        console.log('Search input');
        let newList = state.posts.filter(item => {
          return item.slug.toLowerCase().search(action.input.toLowerCase()) !== -1;      
      }); 
        return{
          ...state,
          newList: newList,
          value:action.input
        }  
        default:
            return state;
        
    }
}

export default postReducer;