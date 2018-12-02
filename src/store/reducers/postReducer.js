const initState = {
  posts: [] ,
  categories: ["Film", "Books"],
  ads:[],
  category: [],
  link: null,
  newList:[],
  value:''
}
const postReducer = (state = initState, action) => {
    console.log("Reducer running", action );
    switch(action.type) {
        case 'FETCH_POSTS': 
        console.log("Reducer1: ",action.data);
        const posts = action.data.objects.filter(item => {
            return(item.type_slug === "posts") 
          }).splice(0,5);
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