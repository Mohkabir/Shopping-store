export default (state, action) =>{
  switch(action.type){
    case "ADD_TO_CART":
      return{
        ...state,
        carts: [...state.carts, action.payload]
      }
    case "REMOVE_FROM_CART":
        return{
          ...state,
          carts: state.carts.filter( (product) => product.id !== action.payload )
        }
     break;
    default :
    return state;
  }
}