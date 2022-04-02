import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	deleteUserByIdReq,
	getUserDataByIdReq,
	getUserDataByUserNameReq,
	loginReq,
	signupReq,
	updateUserDetailsReq,
	updateUserPasswordReq,
	updateUserProfileReq,
} from "../api/user.api";

let initialState = {
	loading: false,
	userData: null,
	userPortfolioData: null,
	isLoggedIn: false,
};

export const getUserDataByIdAsync = createAsyncThunk(
	"userData/getUserData",
	async ({ id }, { rejectWithValue }) => {
		try {
			const userData = await getUserDataByIdReq({ id });
			return userData;
		} catch (error) {
			return rejectWithValue(null);
		}
	}
);

export const getUserDataByUserNameAsync = createAsyncThunk(
	"userData/getUserByUserName",
	async ({ username }, { rejectWithValue }) => {
		try {
			const userData = await getUserDataByUserNameReq({ username });
			return userData;
		} catch (error) {
			return rejectWithValue(null);
		}
	}
);

export const loginAsync = createAsyncThunk(
	"userData/loginReq",
	async ({ email, password }, { rejectWithValue }) => {
		try {
			const loginData = await loginReq({ email, password });
			return loginData;
		} catch (error) {
			return rejectWithValue(false);
		}
	}
);

export const signUpAsync = createAsyncThunk(
	"userData/signupReq",
	async (
		{ firstName, lastName, email, userName, password },
		{ rejectWithValue }
	) => {
		try {
			const signupData = await signupReq({
				email,
				firstName,
				lastName,
				password,
				userName,
			});
			return signupData;
		} catch (error) {
			return rejectWithValue(null);
		}
	}
);

export const deleteUserByIdAsync = createAsyncThunk(
	"userData/deleteUserById",
	async ({ id }, { rejectWithValue }) => {
		try {
			const deletedData = await deleteUserByIdReq({ id });
			return deletedData;
		} catch (error) {
			return rejectWithValue(null);
		}
	}
);

export const updateUserPasswordAsync = createAsyncThunk(
	"userData/updateUserPassword",
	async ({ id, oldPassword, newPassword }, { rejectWithValue }) => {
		try {
			const updatedPasswordData = await updateUserPasswordReq({
				id,
				oldPassword,
				newPassword,
			});
			return updatedPasswordData;
		} catch (error) {
			return rejectWithValue("");
		}
	}
);

export const updateUserDetailsAsync = createAsyncThunk(
	"userData/updateUserDetail",
	async ({ id, email, firstName, lastName }, { rejectWithValue }) => {
		try {
			const updateUserDetailData = await updateUserDetailsReq({
				id,
				email,
				firstName,
				lastName,
			});
			return updateUserDetailData;
		} catch (error) {
			return rejectWithValue(null);
		}
	}
);

export const updateUserProfileAsync = createAsyncThunk(
	"userData/updateProfile",
	async ({ id, profile }, { rejectWithValue }) => {
		try {
			const updateProfileData = await updateUserProfileReq({ id, profile });
			return updateProfileData;
		} catch (error) {
			return rejectWithValue(null);
		}
	}
);
// builder.addCase(getTodosAsyncThunk.pending, (state) => {
// 	state.isLoading = true;
// });
export const { reducer } = createSlice({
	name: "userData",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUserDataByIdAsync.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getUserDataByUserNameAsync.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(loginReq.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(signupReq.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(deleteUserByIdAsync.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(updateUserDetailsAsync.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(updateUserProfileAsync.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(updateUserPasswordAsync.pending, (state) => {
			state.loading = true;
		});

		// failed
		builder.addCase(getUserDataByIdAsync.rejected, (state) => {
			state.userData = [];
			state.loading = false;
		});
		builder.addCase(getUserDataByUserNameAsync.rejected, (state) => {
			state.userData = [];
			state.userPortfolioData = [];
			state.loading = false;
		});
		builder.addCase(loginReq.rejected, (state) => {
			state.isLoggedIn = false;
			state.loading = false;
		});
		builder.addCase(signupReq.rejected, (state) => {
			state.loading = false;
		});
		builder.addCase(deleteUserByIdAsync.rejected, (state) => {
			state.loading = false;
		});
		builder.addCase(updateUserDetailsAsync.rejected, (state) => {
			state.loading = false;
		});
		builder.addCase(updateUserProfileAsync.rejected, (state) => {
			state.loading = false;
		});
		builder.addCase(updateUserPasswordAsync.rejected, (state) => {
			state.loading = false;
		});

		// success
		builder.addCase(getUserDataByIdAsync.fulfilled, (state, { payload }) => {
			state.userData = payload;
			state.loading = false;
		});

		builder.addCase(
			getUserDataByUserNameAsync.fulfilled,
			(state, { payload }) => {
				state.userPortfolioData = payload;
				state.loading = false;
			}
		);

		builder.addCase(loginReq.fulfilled, (state, { payload }) => {
			state.isLoggedIn = payload;
			state.loading = false;
		});

		builder.addCase(signupReq.fulfilled, (state) => {
			state.loading = false;
		});
		builder.addCase(deleteUserByIdAsync.fulfilled, (state) => {
			state.userData = [];
			state.userPortfolioData = [];
			state.loading = false;
		});
		builder.addCase(updateUserDetailsAsync.fulfilled, (state, { payload }) => {
			state.userData = payload.userData;
			state.userPortfolioData = payload.userPortfolioData;
			state.loading = false;
		});
		builder.addCase(updateUserProfileAsync.fulfilled, (state) => {
			state.loading = false;
		});
		builder.addCase(updateUserPasswordAsync.fulfilled, (state) => {
			state.loading = false;
		});
	},
});
