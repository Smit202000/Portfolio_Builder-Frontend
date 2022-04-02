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
		{ id, oldPassword, newPassword },
		{
			headers: {
				auth: getToken(),
			},
		}
	);
	return data;
};

export const updateUserDetailsReq = async ({
	id,
	firstName,
	lastName,
	email,
}) => {
	const { data } = await instance.patch(
		"api/v1/loremipsum",
		{ id, firstName, lastName, email },
		{ headers: { auth: getToken() } }
	);
	return data;
};

export const updateUserProfileReq = async ({ id, profile }) => {
	const { data } = await instance.patch(
		"/api/fjls",
		{ id, profile },
		{ headers: { auth: getToken() } }
	);
	return data;
};

// export const updateUserPortfolioReq = async ({}) => {};

// export const insertPortfolioDataReq = async ({}) => {};
