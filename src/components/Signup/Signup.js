import {
	Box,
	Button,
	TextField,
	Typography,
	Link as MLink,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import {
	signupInitialValues,
	signupValidationSchema,
} from "../../utils/validations";
import "./Signup.css";

const Signup = () => {
	const { handleChange, handleSubmit, values, errors, touched, isSubmitting } =
		useFormik({
			initialValues: signupInitialValues,
			validationSchema: signupValidationSchema,
			onSubmit: (values, { resetForm }) => {
				console.log(values);
				resetForm();
			},
		});

	return (
		<Box>
			<Typography variant="h4" align="center">
				Signup
			</Typography>
			<br />
			<br />
			<form onSubmit={handleSubmit}>
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
