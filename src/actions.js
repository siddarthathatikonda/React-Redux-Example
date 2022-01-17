export const Incaction = (value)=> async dispatch =>{
    dispatch({
        type :"INCREMENT",
        payload : value
    })
}
export const Decaction = ()=> async dispatch =>{
    dispatch({
        type :"DECREMENT"
    })
}