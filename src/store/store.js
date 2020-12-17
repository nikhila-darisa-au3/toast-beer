import {createStore,combineReducers} from 'redux'
import getbeersReducer from '../reducers/getbeersReducer'
// let reducer = combineReducers({
//     getbeersReducer:getbeersReducer
// })
// let store = createStore(getbeersReducer)
let store =createStore(getbeersReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(()=>{

})

function mapDispatchToProps(state){
    return state

}
export {store,mapDispatchToProps}