import * as Yup from "yup";

export const signupInitialValues = {
	firstName: "",
	lastName: "",
	email: "",
	userName: "",
	password: "",
	confirmPassword: "",
};

export const loginInitialValues = {
	email: "",
	password: "",
};

export const portfolioInitialValues = {};

export const signupValidationSchema = () => {
	return Yup.object().shape({
		firstName: Yup.string()
			.trim()
			.lowercase()
			.max(15)
			.required("First Name is required!"),
		lastName: Yup.string()
			.trim()
			.lowercase()
			.max(15)
			.required("Last Name is required!"),
		email: Yup.string()
			.email()
			.trim()
			.lowercase()
			.required("Email is required!"),
		userName: Yup.string()
			.trim()
			.matches(
				/^[a-z0-9_]+$/,
				"User Name Should only contain underscores and alphanums"
			)
			.max(10)
			.lowercase()
			.required("username is required"),
		password: Yup.string()
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
				"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
			)
			.required("Password is required"),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref("password"), null], "Passwords Must Match")
			.required("Confirm Password is required"),
	});
};

export const loginValidationSchema = () => {
	return Yup.object().shape({
		email: Yup.string()
			.email()
			.trim()
			.lowercase()
			.required("Email is required!"),
		password: Yup.string()
			.matches(
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
				"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
			)
			.required("Password is required"),
	});
};
