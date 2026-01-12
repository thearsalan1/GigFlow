import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const login = createAsyncThunk("auth/login", async (data, thunkApi) => {
  try {
    const res = await api.post("/auth/login", data);
    return res.data.user;
  } catch (error) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkApi) => {
    try {
      const res = await api.post("/api/register", data);
      return res.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name:"auth",
  initialState:{
    user:null,
    loading:false,
    error:null,
  },
  reducers:{
    logout:(state)=>{
      state.user=null;
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(login.pending,(state)=>{
      state.loading=true
    })
    .addCase(login.fulfilled,(state)=>{
      state.loading=false
    })
    .addCase(login.rejected,(state,action)=>{
      state.loading=false;
      state.error=action.payload
    })
    .addCase(register.fulfilled,(state,action)=>{
      state.user=action.payload
    })
  }
})

export const {logout} = authSlice.actions;
export default authSlice.reducer;