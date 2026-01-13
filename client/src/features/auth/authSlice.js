import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../api/axios";

export const login = createAsyncThunk("auth/login", async (data, thunkApi) => {
  try {
    const res = await api.post("/auth/login", data);
    console.log(data);

    return res.data.user;
  } catch (error) {
    return thunkApi.rejectWithValue(
      error.response?.data?.message || "Login failed"
    );
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkApi) => {
    try {
      const res = await api.post("/auth/register", data);
      return res.data.user;
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
      await api.post("/auth/logout");
    } catch (error) {
      return thunkApi.rejectWithValue("Logout failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.loading = false;
        state.error = null;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
