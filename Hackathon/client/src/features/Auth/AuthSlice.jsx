import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../apis/axiosInstance";

/* ---------- SIGNUP ---------- */
export const signupUser = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/auth/register", userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

/* ---------- LOGIN ---------- */
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);

      return res.data.user;
    } catch (err) {
      return rejectWithValue("Invalid credentials");
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
  reducers: {
    /* ---------- LOGOUT ---------- */
    logout: (state) => {
      state.user = null;
      state.error = null;
      localStorage.clear(); 
      window.location.href = "/#/login";
    },
  },
  extraReducers: (builder) => {
    builder
      /* SIGNUP */
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      /* LOGIN */
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
