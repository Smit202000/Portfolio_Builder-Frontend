import { createSlice } from "@reduxjs/toolkit";

let initialState = { loading: false, userData: null, userPortfolioData: null };

export const userSlice = createSlice({
	name: "userData"
	initialState,
	reducers: {

	}
});