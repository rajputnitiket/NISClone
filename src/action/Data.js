import api from "./api";

export const Action_Type = {
    FETCH_ALL: 'FETCH_ALL'
};

export const fetch_all = () => dispatch => {
    api.data()
        .then(response => {
            dispatch({
                type: Action_Type.FETCH_ALL,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
};
