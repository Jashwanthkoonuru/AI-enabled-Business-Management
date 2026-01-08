import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Use environment variable instead of hardcoding localhost
const API_URL = `${import.meta.env.VITE_API_URL}/users`;

/* -------- SIGNUP (POST) -------- */
export const signupUser = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(API_URL, userData);
      return res.data;
    } catch (err) {
      return rejectWithValue("Signup failed");
    }
  }
);

/* -------- LOGIN (GET) -------- */
export const loginUser = createAsyncThunk(
  "auth/login",
  async ({ email, password, role }, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `${API_URL}?email=${email}&password=${password}&role=${role}`
      );

      if (res.data.length === 0) return rejectWithValue("Invalid credentials");

      return res.data[0];
    } catch (err) {
      return rejectWithValue("Login failed");
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
    logout: (state) => {
      state.user = null;
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






// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../apis/axiosConfig";

// /* ---------------- SIGNUP ---------------- */
// export const signupUser = createAsyncThunk(
//   "auth/signup",
//   async (userData, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.post("/auth/signup", userData);
//       return res.data;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Signup failed");
//     }
//   }
// );

// /* ---------------- LOGIN ---------------- */
// export const loginUser = createAsyncThunk(
//   "auth/login",
//   async ({ email, password, role }, { rejectWithValue }) => {
//     try {
//       const res = await axiosInstance.post("/auth/login", {
//         email,
//         password,
//         role,
//       });

//       const user = res.data;

//       if (!user?.token) {
//         return rejectWithValue("Token not received from server");
//       }

//       // persist auth data
//       localStorage.setItem("token", user.token);
//       localStorage.setItem("user", JSON.stringify(user));

//       return user;
//     } catch (err) {
//       return rejectWithValue(err.response?.data || "Login failed");
//     }
//   }
// );

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     user: JSON.parse(localStorage.getItem("user")) || null,
//     token: localStorage.getItem("token") || null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.loading = false;
//       state.error = null;
//       localStorage.clear();
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       /* LOGIN */
//       .addCase(loginUser.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//         state.token = action.payload.token;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const { logout } = authSlice.actions;
// export default authSlice.reducer;
