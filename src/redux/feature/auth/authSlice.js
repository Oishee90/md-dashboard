import { createSlice } from "@reduxjs/toolkit";

export const authSlice =  createSlice({

    name : 'auth',
    initialState : {
        user : null,
        token: null
    },
    // reducer object
    reducers : {
          setUser(state,action) {
            const {user, token} = action.payload;
            state.user = user
            state.token = token;
          }

    }
})

// actions under 
export const {setUser} = authSlice.actions
// complete
export default authSlice.reducer;
