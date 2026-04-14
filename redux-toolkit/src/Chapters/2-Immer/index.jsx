import React from 'react'
import { createStore } from 'redux';
import { produce } from 'immer';

const initialState = {
    name: "Saarthak",
    address: {
        street: "Jhilmil",
        city: "Delhi",
        country: "India",
    }
}

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => ({
    type: STREET_UPDATED,
    payload: street
})

const reducer = (state = initialState, action) => {
    switch(action.type){
        case STREET_UPDATED: return produce(state, (draft) => {
            draft.address.street = action.payload
        })
        default: return state;
    }
}

const Immer = () => {9
    const store = createStore(reducer)
    console.log("Initial state", store.getState())
    const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()))

    store.dispatch(updateStreet(`Shahdara`))
    unsubscribe();
  return (
    <div>Immer</div>
  )
}

export default Immer