import {
	Box,
	Button,
	TextField,
	Typography,
	Link as MLink,
	Avatar,
} from "@mui/material";
import { useFormik } from "formik";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { imageUploader, signupReq } from "../../api/user.api";
import {
	signupInitialValues,
	signupValidationSchema,
} from "../../utils/validations";

const Signup = () => {
	const { enqueueSnackbar } = useSnackbar();
	const naviate = useNavigate();
	const handleSignup = async ({
		email,
		firstName,
		lastName,
		userName,
		password,
		image,
	}) => {
		return await signupReq({
			email,
			firstName,
			image,
			lastName,
			password,
			userName,
		});
	};

	const { handleChange, handleSubmit, values, errors, touched, isSubmitting } =
		useFormik({
			initialValues: signupInitialValues,
			validationSchema: signupValidationSchema,
			onSubmit: async (values, { resetForm }) => {
				if (imageUrl === "" || imageUrl === null) {
					enqueueSnackbar("please upload image", { variant: "error" });
				} else {
					const data = await handleSignup({
						image: imageUrl,
						firstName: values.firstName,
						lastName: values.lastName,
						email: values.email,
						password: values.password,
						userName: values.userName,
					});
					if (data.success) {
						enqueueSnackbar("signup successfull!", { variant: "success" });
						naviate("/auth/login");
					} else {
						enqueueSnackbar("signup failed, try again later");
					}
				}
				resetForm();
			},
		});

	const [imageUrl, setImageUrl] = useState();
	const [isImageUploading, setIsImageUploading] = useState(false);

	const handleChangeUrl = async (file) => {
		// await url here
		setIsImageUploading(true);
		const formData = new FormData();
		formData.append("image", file);
		const data = await imageUploader(formData);
		if (data.success) {
			setImageUrl(data.data.data.image);
		} else {
			enqueueSnackbar("image upload failed! try again later", {
				variant: "error",
			});
		}
		setIsImageUploading(false);
	};

	return (
		<Box>
			<Typography variant="h4" align="center">
				Signup
			</Typography>
			<br />
			<br />
			<form onSubmit={handleSubmit}>
				<Box
					display="flex"
					width={"100%"}
					justifyContent={"space-between"}
					alignItems={"center"}
				>
					<Avatar src={imageUrl} alt={"user-profile"} />
					<input
						type="file"
						disabled={isImageUploading}
						accept="image/png,image/jpg,image/jpeg"
						onChange={(e) => {
							handleChangeUrl(e.target.files[0]);
						}}
					/>
				</Box>
				<br />
				<Box display="flex">
					<TextField
						value={values.firstName}
						variant="outlined"
						label={"First Name"}
						fullWidth
						onChange={handleChange}
						name="firstName"
						error={touched.firstName && Boolean(errors.firstName)}
						helperText={touched.firstName && errors.firstName}
					/>
					<TextField
						sx={{ marginLeft: 2 }}
						value={values.lastName}
						variant="outlined"
						label={"Last Name"}
						name="lastName"
						fullWidth
						onChange={handleChange}
						error={touched.lastName && Boolean(errors.lastName)}
						helperText={touched.lastName && errors.lastName}
					/>
				</Box>
				<br />
				<TextField
					type="email"
					value={values.email}
					variant="outlined"
					label={"Email"}
					name="email"
					fullWidth
					onChange={handleChange}
					error={touched.email && Boolean(errors.email)}
					helperText={touched.email && errors.email}
				/>
				<br />
				<br />
				<TextField
					fullWidth
					value={values.userName}
					name="userName"
					variant="outlined"
					label={"Username"}
					onChange={handleChange}
					error={touched.userName && Boolean(errors.userName)}
					helperText={touched.userName && errors.userName}
				/>
				<br />
				<br />
				<TextField
					type="password"
					fullWidth
					value={values.password}
					name="password"
					variant="outlined"
					label={"Password"}
					onChange={handleChange}
					error={touched.password && Boolean(errors.password)}
					helperText={touched.password && errors.password}
				/>
				<br />
				<br />
				<TextField
					type="password"
					fullWidth
					value={values.confirmPassword}
					name="confirmPassword"
					variant="outlined"
					label={"Confirm Password"}
					onChange={handleChange}
					error={touched.confirmPassword && Boolean(errors.confirmPassword)}
					helperText={touched.confirmPassword && errors.confirmPassword}
				/>
				<br />
				<br />
				<Button
					disabled={isSubmitting}
					type="submit"
					variant="contained"
					fullWidth
					color="primary"
				>
					{isSubmitting ? "loading..." : "Signup"}
				</Button>
			</form>
			<br />
			<br />
			<MLink>
				<Link to={"/auth/login"}>
					{"Already Having an account? Login here"}
				</Link>
			</MLink>
		</Box>
	);
};

export default Signup;
