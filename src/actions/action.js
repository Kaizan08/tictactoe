import store from "../store/store";

export let add = (index) =>{
    store.dispatch({type: "ADD", payload: index})
}


