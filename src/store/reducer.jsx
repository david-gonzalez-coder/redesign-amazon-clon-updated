const INITSTATE = {
    basket: [],
}
const ACTIONS = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    DELETE_FROM_BASKET: "DELETE_FROM_BASKET",
}
const reducer = (state, action) =>{
    switch(action.type){
        case ACTIONS.ADD_TO_BASKET:
            if(action.item.id > 0){
                return {
                    ...state,
                    basket: [...state.basket, action.item.id]
                }
            }
            throw ERROR("ERROR ADDING ITEM")
        case ACTIONS.DELETE_FROM_BASKET:
            if(action.item.id > 0){
                let newBasket = [...state.basket]
                let idx = newBasket.indexOf(action.item.id.toString())
                if(idx >= 0) newBasket.splice(idx,1)
               
                return {
                    ...state,
                    basket: newBasket
                }
            }
            throw ERROR("ERROR DELETING ITEM")
        default: 
            throw ERROR("Unknown action.")
            
    }
}

export {INITSTATE, ACTIONS, reducer}