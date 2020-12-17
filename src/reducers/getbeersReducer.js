import data from '../data'
function getbeersReducer(state = { beers: [], beerContent: "" }, action) {
    if (action.type === "GET_BEER_DETAILS") {
        // let newData = state
        state.beers.unshift(action.data)
        // state.beers = newData
        console.log("--------", state)
        return state
    }
    if (action.type === "LIKE_POST") {
        let beerData = state.beers.filter(data => data.id === action.id)
        beerData.map((data) => {
            data.color = "blue"
        })
        return state
    }
    if (action.type === 'GET_BEER_CONTENT') {
        let beerData = state.beers.filter(data => data.id === action.id)
        state.beerContent = beerData
        return {...state}
    }
    return state
}
export default getbeersReducer