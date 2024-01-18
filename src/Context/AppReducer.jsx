

// it helps to specify the application state changes, in response to certain action to out context

export default(state, action) =>{
    switch(action.type){
    case 'Delete_Transaction':
        return{
            ...state, 
            transactions: state.transactions.filter(transaction =>transaction.id !== action.payload)
        }
    case 'Add_Transaction':
        return{
            ...state,
            transactions: [action.payload,...state.transactions]
        }
        default: 
        return state;
    }
}