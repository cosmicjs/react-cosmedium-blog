const initState = {
  posts: [] ,
  categories: ["Film", "Books"],
  ads:[],
  category: [],
  link: null,
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
            }),
        }
    
        default:
            return state;
        
    }
}

export default postReducer;