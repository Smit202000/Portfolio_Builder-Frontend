import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Link as MLink } from "@mui/material";
import { useFormik } from "formik";
import {
	loginInitialValues,
	loginValidationSchema,
} from "../../utils/validations";

const Login = () => {
	const { handleChange, handleSubmit, values, errors, touched, isSubmitting } =
		useFormik({
			initialValues: loginInitialValues,
			validationSchema: loginValidationSchema,
			onSubmit: (values, { resetForm }) => {
				console.log(values);
				resetForm();
			},
		});

	return (
		<Box>
			<Typography variant="h4" align="center">
				Login
			</Typography>
			<br />
			<br />
			<form onSubmit={handleSubmit}>
				<TextField
					type="email"
					name="email"
					value={values.email}
					variant="outlined"
					label={"Email"}
					fullWidth
					onChange={handleChange}
					error={touched.email && Boolean(errors.email)}
					helperText={touched.email && errors.email}
				/>
				<br />
				<br />
				<TextField
					type="password"
					name="password"
					fullWidth
					value={values.password}
					variant="outlined"
					label={"Password"}
					onChange={handleChange}
					error={touched.password && Boolean(errors.password)}
					helperText={touched.password && errors.password}
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
					{isSubmitting ? "loading..." : "signup"}
				</Button>
			</form>
			<br />
			<br />
			<MLink>
				<Link to={"/auth/signup"}>
					{"Don't Have an account? Signup instead"}
				</Link>
			</MLink>
		</Box>
	);
};

export default Login;
