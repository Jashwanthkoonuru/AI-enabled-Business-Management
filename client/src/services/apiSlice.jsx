import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ["User", "Product", "Order", "Auth"],

  endpoints: (builder) => ({

    /* ================= AUTH ================= */

    login: builder.mutation({
      query: (data) => {
        console.log("➡ FRONTEND API CALL → POST /auth/login");
        return {
          url: "auth/login",
          method: "POST",
          body: data,
        };
      },
    }),

    signup: builder.mutation({
      query: (data) => {
        console.log("➡ FRONTEND API CALL → POST /auth/signup");
        return {
          url: "users",
          method: "POST",
          body: data,
        };
      },
    }),

    /* ================= USERS ================= */

    getUsers: builder.query({
      query: () => {
        console.log("➡ FRONTEND API CALL → GET /users");
        return "users";
      },
      providesTags: ["User"],
    }),

    createUser: builder.mutation({
      query: (data) => {
        console.log("➡ FRONTEND API CALL → POST /users");
        return {
          url: "users",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: ({ id, ...data }) => {
        console.log(`➡ FRONTEND API CALL → PUT /users/${id}`);
        return {
          url: `users/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["User"],
    }),

    deleteUser: builder.mutation({
      query: (id) => {
        console.log(`➡ FRONTEND API CALL → DELETE /users/${id}`);
        return {
          url: `users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["User"],
    }),

    /* ================= PRODUCTS ================= */

    getProducts: builder.query({
      query: () => {
        console.log("➡ FRONTEND API CALL → GET /products");
        return "products";
      },
      providesTags: ["Product"],
    }),

    createProduct: builder.mutation({
      query: (data) => {
        console.log("➡ FRONTEND API CALL → POST /products");
        return {
          url: "products",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation({
      query: ({ id, ...data }) => {
        console.log(`➡ FRONTEND API CALL → PUT /products/${id}`);
        return {
          url: `products/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation({
      query: (id) => {
        console.log(`➡ FRONTEND API CALL → DELETE /products/${id}`);
        return {
          url: `products/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Product"],
    }),

    /* ================= ORDERS ================= */

    getOrders: builder.query({
      query: () => {
        console.log("➡ FRONTEND API CALL → GET /orders");
        return "orders";
      },
      providesTags: ["Order"],
    }),

    createOrder: builder.mutation({
      query: (data) => {
        console.log("➡ FRONTEND API CALL → POST /orders");
        return {
          url: "orders",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Order"],
    }),

    updateOrder: builder.mutation({
      query: ({ id, ...data }) => {
        console.log(`➡ FRONTEND API CALL → PUT /orders/${id}`);
        return {
          url: `orders/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["Order"],
    }),

    deleteOrder: builder.mutation({
      query: (id) => {
        console.log(`➡ FRONTEND API CALL → DELETE /orders/${id}`);
        return {
          url: `orders/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Order"],
    }),

  }),
});

export const {
  useSignupMutation,

  useGetUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,

  useGetProductsQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,

  useGetOrdersQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = apiSlice;
export const useLoginMutation = apiSlice.useLoginMutation;
