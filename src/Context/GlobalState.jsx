import react, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initial state
// create a dummy list first

const initialState = {
    transactions: []
}
// create a global context using createcontext
export const GlobalContext = createContext(initialState);

//provider component
//for calling reducer action we need to use dispatch
//here we are trying to wrap all the components as children prop
//transacitons:state.transacitons helps to access anything in the transaction object 


export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //action
    function deleteTransaction(id) {
        dispatch({
            type: 'Delete_Transaction',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'Add_Transaction',
            payload: transaction
        })
    }

    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}