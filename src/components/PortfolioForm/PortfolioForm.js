import { DatePicker, LocalizationProvider } from "@mui/lab";
import {
	Box,
	Button,
	FormControl,
	FormControlLabel,
	// IconButton,
	Paper,
	Radio,
	RadioGroup,
	Slider,
	TextField,
	Typography,
} from "@mui/material";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";
import { useFormik } from "formik";
import { portfolioInitialData, portfolioSchema } from "../../utils/validations";

const PortfolioForm = () => {
	const { handleChange, handleSubmit, values, isSubmitting } = useFormik({
		initialValues: portfolioInitialData,
		validationSchema: portfolioSchema,
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			resetForm();
		},
	});

	return (
		<Box py={2} width={"100%"}>
			<Typography color="gray" sx={{ p: 1 }} variant="h6">
				{"fill the form & We'll handle rest for you..."}
			</Typography>
			<form onSubmit={handleSubmit}>
				<Paper
					sx={{
						p: 2,
						display: "flex",
						flexDirection: "column",
					}}
					variant="outlined"
				>
					<Box display="flex">
						<TextField
							value={values.contact}
							type="tel"
							size="small"
							variant="outlined"
							label={"Contact"}
							onChange={handleChange}
							sx={{ mx: 1 }}
							fullWidth
							name="contact"
						/>
					</Box>
				</Paper>
				<br />
				<Paper
					sx={{
						p: 2,
						display: "flex",
						flexDirection: "column",
					}}
					variant="outlined"
				>
					{[
						"Secondary Education",
						"Higher Secondary Education",
						"Bachelors Degree",
						"Masters Degree",
					].map((text) => (
						<div key={text}>
							<Box display="flex">
								<TextField
									value={""}
									size="small"
									variant="outlined"
									label={text}
									sx={{ mx: 1, flex: 5 }}
									fullWidth
									name=""
								/>
								<TextField
									value={""}
									type={"number"}
									size="small"
									variant="outlined"
									label="Score"
									sx={{ mx: 1, flex: 2 }}
									fullWidth
								/>
								<Box mx={1}>
									<LocalizationProvider dateAdapter={AdapterDateFns}>
										<DatePicker
											label="From"
											value={null}
											variant="outlined"
											renderInput={(params) => (
												<TextField size="small" {...params} />
											)}
										/>
									</LocalizationProvider>
								</Box>
								<Box mx={1}>
									<LocalizationProvider dateAdapter={AdapterDateFns}>
										<DatePicker
											label="To"
											value={null}
											variant="outlined"
											renderInput={(params) => (
												<TextField size="small" {...params} />
											)}
										/>
									</LocalizationProvider>
								</Box>
							</Box>
							<br />
						</div>
					))}
				</Paper>
				<br />
				<Paper
					sx={{
						p: 2,
						display: "flex",
						flexDirection: "column",
					}}
					variant="outlined"
				>
					{[0, 1, 2, 3, 4].map((num) => (
						<div key={num}>
							<Box key={num} alignItems={"center"} display="flex">
								<TextField
									value={""}
									sx={{ flex: 6, mx: 1 }}
									size="small"
									label="Enter Skill"
								/>
								<Slider
									sx={{ flex: 6, mr: 1, ml: 3 }}
									size="small"
									defaultValue={0}
									valueLabelDisplay="auto"
								/>
							</Box>
							<br />
						</div>
					))}
				</Paper>
				<br />
				<Paper
					sx={{
						p: 2,
						display: "flex",
						flexDirection: "column",
					}}
					variant="outlined"
				>
					<Box>
						{[0, 1, 2].map((num) => (
							<div key={num}>
								<Box width={"100%"}>
									<TextField
										value={""}
										fullWidth
										label={"Enter Project Title"}
										size={"small"}
									/>
									<br />
									<br />
									<br />
									<TextField
										value={""}
										fullWidth
										multiline
										rows={5}
										label={"Enter Project Description"}
										size={"small"}
									/>
								</Box>
								<br />
								<br />
							</div>
						))}
					</Box>
				</Paper>
				<br />
				<Paper
					sx={{
						p: 2,
						display: "flex",
						flexDirection: "column",
					}}
					variant="outlined"
				>
					<TextField
						value={values.aboutMe}
						label="Tell Us Little Bit About Yourself"
						multiline
						rows={5}
						onChange={handleChange}
						size="small"
						name="aboutMe"
					/>
				</Paper>
				<br />
				<Paper
					sx={{
						p: 2,
						display: "flex",
						flexDirection: "column",
					}}
					variant="outlined"
				>
					<TextField
						value={values.country}
						name="country"
						onChange={handleChange}
						size="small"
						fullWidth
						variant={"outlined"}
						label="Entry Country"
					/>
					<br />
					<TextField
						value={values.state}
						name="state"
						onChange={handleChange}
						size="small"
						fullWidth
						variant={"outlined"}
						label="Entry State"
					/>
					<br />
					<TextField
						value={values.city}
						name="city"
						onChange={handleChange}
						size="small"
						fullWidth
						variant={"outlined"}
						label="Entry City"
					/>
					<br />
					<TextField
						value={values.street}
						name="street"
						onChange={handleChange}
						size="small"
						fullWidth
						variant={"outlined"}
						label="Entry Street"
					/>
				</Paper>
				<br />
				<Paper
					sx={{
						p: 2,
						display: "flex",
						flexDirection: "column",
					}}
					variant="outlined"
				>
					<Box display="flex">
						{[
							{ icon: <LinkedInIcon />, name: "linkedIn" },
							{ icon: <GitHubIcon />, name: "Github" },
							{ icon: <TwitterIcon />, name: "Twitter" },
							{ icon: <FacebookIcon />, name: "Facebook" },
						].map((social) => (
							<Box key={social.name} display={"flex"} width={"100%"}>
								<TextField
									value={""}
									sx={{ width: "100%", mx: 1 }}
									size="small"
									fullWidth
									variant={"outlined"}
									label={`Entry ${social.name} Link`}
								/>
							</Box>
						))}
					</Box>
				</Paper>
				<br />
				<Paper
					sx={{
						p: 2,
						display: "flex",
						flexDirection: "column",
					}}
					variant="outlined"
				>
					<Box>
						{[0, 1, 2].map((num) => (
							<div key={num}>
								<Box display={"flex"}>
									<TextField
										value={""}
										size={"small"}
										variant="outlined"
										label={"Designation"}
										sx={{ mx: 1 }}
										fullWidth
									/>
									<TextField
										value={""}
										type="num"
										size="small"
										variant="outlined"
										label={"Experience Over Years"}
										sx={{ mx: 1 }}
										fullWidth
									/>
								</Box>
								<br />
								<Box display="flex">
									<TextField
										value={""}
										label="Description"
										multiline
										fullWidth
										rows={5}
										sx={{ mx: 1 }}
										size="small"
									/>
								</Box>
								<br />
								<br />
							</div>
						))}
					</Box>
				</Paper>
				<br />
				<Paper
					sx={{
						p: 2,
						display: "flex",
						flexDirection: "column",
					}}
					variant="outlined"
				>
					<Typography color={"gray"} variant="body1">
						Select Portfolio Template
					</Typography>
					<br />
					<FormControl>
						<RadioGroup
							aria-labelledby="demo-radio-buttons-group-label"
							defaultValue="1"
							name="radio-buttons-group"
							sx={{ display: "flex" }}
						>
							<FormControlLabel
								value="1"
								control={<Radio />}
								label="Template 1"
							/>
							<FormControlLabel
								value="2"
								control={<Radio />}
								label="Template 2"
							/>
							<FormControlLabel
								value="3"
								control={<Radio />}
								label="Template 3"
							/>
						</RadioGroup>
					</FormControl>
				</Paper>
				<br />
				<Box display={"flex"}>
					<Button
						disabled={isSubmitting}
						fullWidth
						sx={{ mx: 1 }}
						color="error"
						variant="contained"
					>
						Reset
					</Button>
					<Button
						disabled={isSubmitting}
						fullWidth
						type="submit"
						sx={{ mx: 1 }}
						color="primary"
						variant="contained"
					>
						{isSubmitting ? "loading..." : "Save & Deploy"}
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default PortfolioForm;
