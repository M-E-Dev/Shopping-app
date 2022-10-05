import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { CState } from "../slices/types";
import type { Reducer } from '@reduxjs/toolkit'

const categoriesUrl = 'https://upayments-studycase-api.herokuapp.com/api/categories/'
const productsUrl = 'https://upayments-studycase-api.herokuapp.com/api/products'
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im0uZXJvZ2x1LmRldkBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vTS1FLURldiIsImlhdCI6MTY2NDU3MTI2MiwiZXhwIjoxNjY1MDAzMjYyfQ.kTsgB4dLp6w1nmq9JuEE00xO574H7WEkEzLLNkmQNFw'

const initialState: CState = {
    categories: [],
    products: [],
    isLoading: true,
    currentCategory: "All",
    filteredProducts: [],
    detailProduct: [],
    favoriteProducts: [],
    deletedFavorites: 1,
};

export const getInfo = createAsyncThunk("cart/getInfo", async (name, thunkAPI) => {
    try {
        const response = await axios.all([
            axios.get<any>(categoriesUrl, { headers: { "Authorization": `Bearer ${token}` } }),
            axios.get<any>(productsUrl, { headers: { "Authorization": `Bearer ${token}` } })
        ]); return response
    } catch (error) { return thunkAPI.rejectWithValue("something went wrong") }
})

export const sendProduct = createAsyncThunk("post/sendProduct", async (data:{}) => {
    const config: {} = {
        method: 'post',
        url: productsUrl,
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: data
    };
    try {
      const response = await axios(config);
      return response.data;
    } catch (error) {
      console.log(error);
      return null
    }
})

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        deleteProduct: (state, action) => {
            const type = action.payload;
            state.products = state.products.filter((item) => item._id !== type)
            state.filteredProducts = state.products
        },
        filterProducts: (state, action) => {
            const type = action.payload;
            state.currentCategory = type
            state.filteredProducts = state.products.filter((item) => item.category == type)

            if (state.currentCategory === "All") {
                state.currentCategory = "All"
                state.filteredProducts = state.products;
            }
        },
        addToFavorites: (state, action) => {
            const type = action.payload;
            const productToAddFavorites = state.products.find((item) => item._id == type)
            const items = JSON.parse(localStorage.getItem("favorites") || "");
            if (!items.some((item: any) => item._id == type)) {
                const newItems = JSON.stringify([...items, productToAddFavorites])
                localStorage.setItem("favorites", newItems)
            }
        },
        removeFromFavorites: (state, action) => {
            const type = action.payload;
            const items = JSON.parse(localStorage.getItem("favorites") || "");
            const filteredItems = items.filter((item: any) => item._id !== type)
            const newItems = JSON.stringify(filteredItems)
            localStorage.setItem("favorites", newItems)
            state.deletedFavorites++
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getInfo.pending, (state, action) => { state.isLoading = true })
            .addCase(getInfo.fulfilled, (state, action: PayloadAction<any>) => { state.isLoading = false; state.categories = action.payload[0].data.categories; state.products = action.payload[1].data.products; state.filteredProducts = action.payload[1].data.products })
            .addCase(getInfo.rejected, (state, action) => { state.isLoading = true; console.log(action) })
    }
});

export const { deleteProduct, filterProducts, addToFavorites, removeFromFavorites } = cartSlice.actions;

declare const reducer: Reducer<{}>
export default cartSlice.reducer