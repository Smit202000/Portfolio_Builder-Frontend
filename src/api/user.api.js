import axios from "axios";
import { getToken } from "../utils/tokens";

const instance = axios.create({
	baseURL: "https://portfoliobuilder-by-aavishkar.herokuapp.com",
});

export const imageUploader = async (formData) => {
	try {
		const { data } = await instance.post("/upload-image", formData, {
			"Content-Type": "multipart/form-data",
		});
		return { success: true, data };
	} catch (error) {
		return {
			success: false,
			error: JSON.stringify(error),
		};
	}
};

export const getUserDataByUserNameReq = async ({ username }) => {
	const { data } = await instance.get(`/portfolio/${username}`);
	return data;
};

export const loginReq = async ({ email, password }) => {
	try {
		const { data } = await instance.post("/user/login", { email, password });
		return { success: true, data };
	} catch (error) {
		return { success: false, error };
	}
};

export const signupReq = async ({
	firstName,
	lastName,
	email,
	userName,
	password,
	image,
}) => {
	try {
		const { data } = await instance.post("/user/signup", {
			firstName,
			lastName,
			email,
			password,
			userName,
			image,
		});
		return { success: true, data };
	} catch (error) {
		return { success: false, error: JSON.stringify(error) };
	}
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

export const insertPortfolioDataReq = async ({
	contactNumber,
	about,
	educationDetails,
	experienceDetails,
	skills,
	projects,
	socialMediaProfiles,
	address,
	template,
}) => {
	try {
		const { data } = await instance.post(
			"/portfolio",
			{
				contactNumber,
				about,
				educationDetails,
				experienceDetails,
				skills,
				projects,
				socialMediaProfiles,
				address,
				template,
			},
			{
				headers: {
					Authorization: "Bearer " + getToken(),
				},
			}
		);
		return { success: true, data };
	} catch (error) {
		return { success: false, error: JSON.stringify(error) };
	}
};
