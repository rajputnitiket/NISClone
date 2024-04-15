import { Action_Type } from "../action/Data";

const initialstate = {
    list: []
}

export const data = (state = initialstate, action) => {
    switch (action.type) {
        case Action_Type.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }

        default:
            return state
    }
}

export default data;