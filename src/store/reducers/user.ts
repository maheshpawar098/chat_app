
   
// Initial State
const initialState = {
    users: 0,
  };
  
  // Redux: Counter Reducer
  const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case 'USERS_LIST': {
        return {
          ...state,
        };
      }
     
      default: {
        return state;
      }
    }
  };
  
  // Exports
  export default userReducer;