

export const ADD_FEATURES="ADD_FEATURES";
export const REMOVE_FEATURES="REMOVE_FEATURES";
export const UPDATE_TOTAL="UPDATE_TOTAL";

export const addFeatures = newFeatures=>{
    console.log("ADD_FEATURES", newFeatures);
    return {
        type:ADD_FEATURES,
        payload:newFeatures
    }
}

export const removeFeatures = deleteFeatures=>{
    console.log("RemoveFeatures", deleteFeatures);
    return {
        type:REMOVE_FEATURES,
         payload: deleteFeatures
    }
}

export const updateTotal = update=>{
    console.log("Updatetoal", update);
    return {
         type: UPDATE_TOTAL, 
         payload:update
    }
}
