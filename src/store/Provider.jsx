import { createContext, useContext, useReducer } from "react";

const StateContext = createContext(null)

const Provider = ({children, reducer, initState}) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initState)}>
            {children}
        </StateContext.Provider>
    )
}

const useProvider = () => useContext(StateContext)

export {StateContext, Provider, useProvider}