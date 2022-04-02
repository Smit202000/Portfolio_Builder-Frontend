import axios from "axios";
import { getToken } from "../utils/tokens";

const instance = axios.create({
	baseURL: "",
});

export const getUserDataByUserNameReq = async ({ username }) => {
	const { data } = await instance.get(`/api/v1/user-data/${username}`);
	return data;
};

export const loginReq = async ({ email, password }) => {
	const { data } = await instance.post("/api/v1/login", { email, password });
	return data;
};

export const signupReq = async ({
	firstName,
	lastName,
	email,
	userName,
	password,
}) => {
	const { data } = await instance.post("/api/v1/signup", {
		firstName,
		lastName,
		email,
		password,
		userName,
	});
	return data;
};

export const getUserDataByIdReq = async ({ id }) => {
	const { data } = await instance.get(`/api/v1/getuserdata/${id}`, {
		headers: {
			auth: getToken(),
		},
	});
	return data;
};

export const deleteUserByIdReq = async ({ id }) => {
	const { data } = await instance.delete(`/api/v1/delete/${id}`, {
		headers: {
			auth: getToken(),
		},
	});
	return data;
};

export const updateUserPasswordReq = async ({
	id,
	oldPassword,
	newPassword,
}) => {
	const { data } = await axios.patch(
		"/api/v1/update-password",
		{ oldPassword, newPassword },
		{
			headers: {
				auth: getToken(),
			},
		}
	);
	return data;
};

export const updateUserDetailsReq = async ({}) => {};

export const updateUserProfileReq = async ({ id, profile }) => {};

export const updateUserPortfolioReq = async ({}) => {};

export const insertPortfolioDataReq = async ({}) => {};
