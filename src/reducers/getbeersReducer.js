import data from '../data'
function getbeersReducer(state = { beers: [], beerContent: "" }, action) {
    if (action.type === "GET_BEER_DETAILS") {
        // let newData = state
        state.beers.push(action.data)
        // state.beers = newData
        return state
    }
    if (action.type === "LIKE_POST") {
        // let beerData = state.beers.filter(data => data.id === action.id)
        // beerData.map((data) => {
        //     return data.color = "blue"
        // })
        // state.beers = beerData
        state.beers.filter((data) => {
            if (data.id === action.id) {
              if(data.color==="blue"){
                data.color=""
                data.likes = data.likes-1
              }else{
                data.color="blue"
                data.likes = data.likes+1
              }
            }
            // return data
        })
        return state
    }
    if(action.type === 'ADD_COMMENT'){
        state.beers.filter((data) => {
            if (data.id === action.id) {
             data.comments.push(action.data)
            }
        })
        return state
    }
    if (action.type === 'GET_BEER_CONTENT') {
        let beerData = state.beers.filter(data => data.id === action.id)
        console.log(state)
        state.beerContent = beerData
        return { ...state }
    }
    return state
}
export default getbeersReducer