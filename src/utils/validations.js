import * as Yup from "yup";
import "yup-phone";

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

export const portfolioSchema = () => {
	return Yup.object().shape({
		contact: Yup.string().phone("IN").required("Required Field"),
		ssc: Yup.string().trim().lowercase().required("Required Field"),
		sscScore: Yup.string().trim().lowercase().required("Required Field"),
		sscFrom: Yup.string().required("Required Field"),
		sscTo: Yup.string().required("Required Field"),
		hsc: Yup.string().trim().lowercase().required("Required Field"),
		hscScore: Yup.string().trim().lowercase().required("Required Field"),
		hscFrom: Yup.string().required("Required Field"),
		hscTo: Yup.string().required("Required Field"),
		bachelor: Yup.string().trim().lowercase().required("Required Field"),
		bachelorScore: Yup.string().trim().lowercase().required("Required Field"),
		bachelorFrom: Yup.string().required("Required Field"),
		bachelorTo: Yup.string().required("Required Field"),
		skill1Name: Yup.string().required("Required Field"),
		skill1Range: Yup.string().required("Required Field"),
		skill2Name: Yup.string().required("Required Field"),
		skill2Range: Yup.string().required("Required Field"),
		skill3Name: Yup.string().required("Required Field"),
		skill3Range: Yup.string().required("Required Field"),
		skill4Name: Yup.string().required("Required Field"),
		skill4Range: Yup.string().required("Required Field"),
		skill5Name: Yup.string().required("Required Field"),
		skill5Range: Yup.string().required("Required Field"),
		project1Title: Yup.string().required("Required Field"),
		project1Description: Yup.string().required("Required Field"),
		project2Title: Yup.string().required("Required Field"),
		project2Description: Yup.string().required("Required Field"),
		project3Title: Yup.string().required("Required Field"),
		project3Description: Yup.string().required("Required Field"),
		aboutMe: Yup.string().required("Required Field"),
		country: Yup.string().required("Required Field"),
		state: Yup.string().required("Required Field"),
		city: Yup.string().required("Required Field"),
		street: Yup.string().required("Required Field"),
		gitLink: Yup.string().required("Required Field"),
		fbLink: Yup.string().required("Required Field"),
		twLink: Yup.string().required("Required Field"),
		ldLink: Yup.string().required("Required Field"),
		experience1Designation: Yup.string().required("Required Field"),
		experience1Years: Yup.string().required("Required Field"),
		experience1Description: Yup.string().required("Required Field"),
		experience2Designation: Yup.string().required("Required Field"),
		experience2Years: Yup.string().required("Required Field"),
		experience2Description: Yup.string().required("Required Field"),
		experience3Designation: Yup.string().required("Required Field"),
		experience3Years: Yup.string().required("Required Field"),
		experience3Description: Yup.string().required("Required Field"),
		template: Yup.string().required("Required Field"),
	});
};

export const portfolioInitialData = {
	contact: "",
	ssc: "",
	sscScore: "",
	sscFrom: "",
	sscTo: "",
	hsc: "",
	hscScore: "",
	hscFrom: "",
	hscTo: "",
	bachelor: "",
	bachelorScore: "",
	bachelorFrom: "",
	bachelorTo: "",
	skill1Name: "",
	skill1Range: "",
	skill2Name: "",
	skill2Range: "",
	skill3Name: "",
	skill3Range: "",
	skill4Name: "",
	skill4Range: "",
	skill5Name: "",
	skill5Range: "",
	project1Title: "",
	project1Description: "",
	project2Title: "",
	project2Description: "",
	project3Title: "",
	project3Description: "",
	aboutMe: "",
	country: "",
	state: "",
	city: "",
	street: "",
	gitLink: "",
	fbLink: "",
	twLink: "",
	ldLink: "",
	experience1Designation: "",
	experience1Years: "",
	experience1Description: "",
	experience2Designation: "",
	experience2Years: "",
	experience2Description: "",
	experience3Designation: "",
	experience3Years: "",
	experience3Description: "",
	template: "",
};

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
