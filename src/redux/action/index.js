// Add to cart function 

export const addItem = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}


// Delete item from cart function 

export const delItem = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}