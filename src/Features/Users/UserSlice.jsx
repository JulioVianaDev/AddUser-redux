import { createSlice } from "@reduxjs/toolkit";

const initialState=[{    id:1,    name:"tomate Reducer",    email: "tomate@gmail.com"  },
{    id:2,    name:"tomate2",    email: "tomate2@gmail.com"  },
{    id:3,    name:"tomate3",    email: "tomate3@gmail.com"  }
];

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{
    addUser: (state,action)=>{
      state.push(action.payload)
    },
    editUser: (state,action)=>{
      const {id,name, email } = action.payload;
      const existingUser = state.find(user=>user.id === id);
      if (existingUser){
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deleteUser:(state,action)=>{
      const {id} = action.payload;
      const existingUser = state.find(user=>user.id === id);
      if (existingUser){
        return state.filter(user=>user.id !== id)
      }
    }
  }
})

export const {addUser,editUser, deleteUser} = userSlice.actions;
export default userSlice.reducer;