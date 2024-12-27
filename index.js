const redux=require('redux')
const createStore=redux.createStore

const BUY_CAKE ='BUY_CAKE'


function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}

//(previousState,action)=>newState

const initialState={
    numOfCake:10
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,//spreading to make a copy
            numOfCake:state.numOfCake-1
        }
        default:return state
    }

}

const store =createStore(reducer)
console.log('Initial state',store.getState());
const unsubscribe =store.subscribe(()=>console.log('Updates state',store.getState()));
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
