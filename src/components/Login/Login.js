import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as MLink } from "@mui/material";
import { useFormik } from "formik";
import {
	loginInitialValues,
	loginValidationSchema,
} from "../../utils/validations";
import { loginReq } from "../../api/user.api";
import { useSnackbar } from "notistack";
import { setToken } from "../../utils/tokens";
import { useDispatch } from "react-redux";
import { setLoginData } from "../../features/user.slice";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const { enqueueSnackbar } = useSnackbar();
	const handleLogin = async ({ email, password }) => {
		return await loginReq({ email, password });
	};

	const { handleChange, handleSubmit, values, errors, touched, isSubmitting } =
		useFormik({
			initialValues: loginInitialValues,
			validationSchema: loginValidationSchema,
			onSubmit: async (values, { resetForm }) => {
				const data = await handleLogin({ ...values });
				if (data.success) {
					enqueueSnackbar("login success", { variant: "success" });
					dispatch(setLoginData(data.data.data.user));
					setToken(data.data.data.accessToken);
					navigate("/");
				} else {
					enqueueSnackbar("invalid email/password. try again", {
						variant: "error",
					});
				}
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
					{isSubmitting ? "loading..." : "login"}
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
