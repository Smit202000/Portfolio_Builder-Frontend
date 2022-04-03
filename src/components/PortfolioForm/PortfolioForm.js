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
import { insertPortfolioDataReq } from "../../api/user.api";

const PortfolioForm = () => {
	const { handleChange, setFieldValue, handleSubmit, values, isSubmitting } =
		useFormik({
			initialValues: portfolioInitialData,
			validationSchema: portfolioSchema,
			onSubmit: async (values, { resetForm }) => {
				console.log(
					await handleSubmitData({
						contactNumber: values.contact,
						about: values.aboutMe,
						educationDetails: [
							{
								title: values.ssc,
								score: values.sscScore,
								from: values.sscFrom,
								to: values.sscTo,
							},
							{
								title: values.hsc,
								score: values.hscScore,
								from: values.hscFrom,
								to: values.hscTo,
							},
							{
								title: values.bachelor,
								score: values.bachelorScore,
								from: values.bachelorFrom,
								to: values.bachelorTo,
							},
							{
								title: values.master,
								score: values.masterScore,
								from: values.masterFrom,
								to: values.masterTo,
							},
						],
						experienceDetails: [
							{
								designation: values.experience1Designation,
								years: values.experience1Years,
								description: values.project1Description,
							},
							{
								designation: values.experience2Designation,
								years: values.experience2Years,
								description: values.project2Description,
							},
							{
								designation: values.experience3Designation,
								years: values.experience3Years,
								description: values.project3Description,
							},
						],
						skills: [
							{
								name: values.skill1Name,
								range: values.skill1Range,
							},
							{
								name: values.skill2Name,
								range: values.skill2Range,
							},
							{
								name: values.skill3Name,
								range: values.skill3Range,
							},
							{
								name: values.skill4Name,
								range: values.skill4Range,
							},
							{
								name: values.skill5Name,
								range: values.skill5Range,
							},
						],
						projects: [
							{
								title: values.project1Title,
								description: values.project1Description,
							},
							{
								title: values.project2Title,
								description: values.project2Description,
							},
							{
								title: values.project3Title,
								description: values.project3Description,
							},
						],
						socialMediaProfiles: [
							{
								type: "facebook",
								link: values.fbLink,
							},
							{
								type: "twitter",
								link: values.twLink,
							},
							{
								type: "linkedIn",
								link: values.ldLink,
							},
							{
								type: "Github",
								link: values.gitLink,
							},
						],
						address: {
							country: values.country,
							state: values.state,
							city: values.city,
							street: values.street,
						},
						template: values.template,
					})
				);
				resetForm();
			},
		});

	const handleSubmitData = async ({
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
		return await insertPortfolioDataReq({
			contactNumber,
			about,
			educationDetails,
			experienceDetails,
			skills,
			projects,
			socialMediaProfiles,
			address,
			template,
		});
	};

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
					<Typography color={"gray"} variant="body1">
						Personal Details
					</Typography>
					<br />
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
					<Typography color={"gray"} variant="body1">
						Education
					</Typography>
					{[
						"Secondary Education (SSC School)",
						"Higher Secondary Education (HSC School)",
						"Bachelors Degree (Bachelors College)",
						"Masters Degree (Masters College)",
					].map((text, index) => (
						<div key={text}>
							<Box display="flex">
								{index === 0 && (
									<TextField
										value={values.ssc}
										name={"ssc"}
										onChange={handleChange}
										size="small"
										variant="outlined"
										label={text}
										sx={{ mx: 1, flex: 5 }}
										fullWidth
									/>
								)}
								{index === 1 && (
									<TextField
										value={values.hsc}
										name={"hsc"}
										onChange={handleChange}
										size="small"
										variant="outlined"
										label={text}
										sx={{ mx: 1, flex: 5 }}
										fullWidth
									/>
								)}
								{index === 2 && (
									<TextField
										value={values.bachelor}
										name={"bachelor"}
										onChange={handleChange}
										size="small"
										variant="outlined"
										label={text}
										sx={{ mx: 1, flex: 5 }}
										fullWidth
									/>
								)}
								{index === 3 && (
									<TextField
										value={values.master}
										name={"master"}
										onChange={handleChange}
										size="small"
										variant="outlined"
										label={text}
										sx={{ mx: 1, flex: 5 }}
										fullWidth
									/>
								)}

								{index === 0 && (
									<TextField
										value={values.sscScore}
										name="sscScore"
										onChange={handleChange}
										type={"number"}
										size="small"
										variant="outlined"
										label="Score"
										sx={{ mx: 1, flex: 2 }}
										fullWidth
									/>
								)}
								{index === 1 && (
									<TextField
										value={values.hscScore}
										name="hscScore"
										onChange={handleChange}
										type={"number"}
										size="small"
										variant="outlined"
										label="Score"
										sx={{ mx: 1, flex: 2 }}
										fullWidth
									/>
								)}
								{index === 2 && (
									<TextField
										value={values.bachelorScore}
										name="bachelorScore"
										onChange={handleChange}
										type={"number"}
										size="small"
										variant="outlined"
										label="Score"
										sx={{ mx: 1, flex: 2 }}
										fullWidth
									/>
								)}
								{index === 3 && (
									<TextField
										value={values.masterScore}
										name="masterScore"
										onChange={handleChange}
										type={"number"}
										size="small"
										variant="outlined"
										label="Score"
										sx={{ mx: 1, flex: 2 }}
										fullWidth
									/>
								)}
								<Box mx={1}>
									{index === 0 && (
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="From"
												value={values.sscFrom}
												name="sscFrom"
												onChange={(newValue) => {
													setFieldValue(
														"sscFrom",
														new Date(newValue).toLocaleDateString()
													);
												}}
												variant="outlined"
												renderInput={(params) => (
													<TextField size="small" {...params} />
												)}
											/>
										</LocalizationProvider>
									)}
									{index === 1 && (
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="From"
												value={values.hscFrom}
												name="hscFrom"
												onChange={(newValue) => {
													setFieldValue(
														"hscFrom",
														new Date(newValue).toLocaleDateString()
													);
												}}
												variant="outlined"
												renderInput={(params) => (
													<TextField size="small" {...params} />
												)}
											/>
										</LocalizationProvider>
									)}
									{index === 2 && (
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="From"
												value={values.bachelorFrom}
												name="bachelorFrom"
												onChange={(newValue) => {
													setFieldValue(
														"bachelorFrom",
														new Date(newValue).toLocaleDateString()
													);
												}}
												variant="outlined"
												renderInput={(params) => (
													<TextField size="small" {...params} />
												)}
											/>
										</LocalizationProvider>
									)}
									{index === 3 && (
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="From"
												value={values.masterFrom}
												name="masterFrom"
												onChange={(newValue) => {
													setFieldValue(
														"masterFrom",
														new Date(newValue).toLocaleDateString()
													);
												}}
												variant="outlined"
												renderInput={(params) => (
													<TextField size="small" {...params} />
												)}
											/>
										</LocalizationProvider>
									)}
								</Box>
								<Box mx={1}>
									{index === 0 && (
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="To"
												value={values.sscTo}
												onChange={(newValue) => {
													setFieldValue(
														"sscTo",
														new Date(newValue).toLocaleDateString()
													);
												}}
												name="sscTo"
												variant="outlined"
												renderInput={(params) => (
													<TextField size="small" {...params} />
												)}
											/>
										</LocalizationProvider>
									)}
									{index === 1 && (
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="To"
												value={values.hscTo}
												onChange={(newValue) => {
													setFieldValue(
														"hscTo",
														new Date(newValue).toLocaleDateString()
													);
												}}
												name="hscTo"
												variant="outlined"
												renderInput={(params) => (
													<TextField size="small" {...params} />
												)}
											/>
										</LocalizationProvider>
									)}
									{index === 2 && (
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="To"
												value={values.bachelorTo}
												onChange={(newValue) => {
													setFieldValue(
														"bachelorTo",
														new Date(newValue).toLocaleDateString()
													);
												}}
												name="bachelorTo"
												variant="outlined"
												renderInput={(params) => (
													<TextField size="small" {...params} />
												)}
											/>
										</LocalizationProvider>
									)}
									{index === 3 && (
										<LocalizationProvider dateAdapter={AdapterDateFns}>
											<DatePicker
												label="To"
												value={values.masterTo}
												onChange={(newValue) => {
													setFieldValue(
														"masterTo",
														new Date(newValue).toLocaleDateString()
													);
												}}
												name="masterTo"
												variant="outlined"
												renderInput={(params) => (
													<TextField size="small" {...params} />
												)}
											/>
										</LocalizationProvider>
									)}
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
					<Typography color={"gray"} variant="body1">
						Skills
					</Typography>
					{[0, 1, 2, 3, 4].map((num) => (
						<div key={num}>
							<Box key={num} alignItems={"center"} display="flex">
								{num === 0 && (
									<>
										<TextField
											value={values.skill1Name}
											name="skill1Name"
											onChange={handleChange}
											sx={{ flex: 6, mx: 1 }}
											size="small"
											label="Enter Skill"
										/>
										<Slider
											value={values.skill1Range}
											onChange={handleChange}
											sx={{ flex: 6, mr: 1, ml: 3 }}
											size="small"
											name={"skill1Range"}
											valueLabelDisplay="auto"
										/>
									</>
								)}
								{num === 1 && (
									<>
										<TextField
											value={values.skill2Name}
											name="skill2Name"
											onChange={handleChange}
											sx={{ flex: 6, mx: 1 }}
											size="small"
											label="Enter Skill"
										/>
										<Slider
											value={values.skill2Range}
											onChange={handleChange}
											sx={{ flex: 6, mr: 1, ml: 3 }}
											size="small"
											name={"skill2Range"}
											valueLabelDisplay="auto"
										/>
									</>
								)}
								{num === 2 && (
									<>
										<TextField
											value={values.skill3Name}
											name="skill3Name"
											onChange={handleChange}
											sx={{ flex: 6, mx: 1 }}
											size="small"
											label="Enter Skill"
										/>
										<Slider
											value={values.skill3Range}
											onChange={handleChange}
											sx={{ flex: 6, mr: 1, ml: 3 }}
											size="small"
											name={"skill3Range"}
											valueLabelDisplay="auto"
										/>
									</>
								)}
								{num === 3 && (
									<>
										<TextField
											value={values.skill4Name}
											name="skill4Name"
											onChange={handleChange}
											sx={{ flex: 6, mx: 1 }}
											size="small"
											label="Enter Skill"
										/>
										<Slider
											value={values.skill4Range}
											onChange={handleChange}
											sx={{ flex: 6, mr: 1, ml: 3 }}
											size="small"
											name={"skill4Range"}
											valueLabelDisplay="auto"
										/>
									</>
								)}
								{num === 4 && (
									<>
										<TextField
											value={values.skill5Name}
											name="skill5Name"
											onChange={handleChange}
											sx={{ flex: 6, mx: 1 }}
											size="small"
											label="Enter Skill"
										/>
										<Slider
											value={values.skill5Range}
											onChange={handleChange}
											sx={{ flex: 6, mr: 1, ml: 3 }}
											size="small"
											name={"skill5Range"}
											valueLabelDisplay="auto"
										/>
									</>
								)}
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
					<Typography color={"gray"} variant="body1">
						Project Details
					</Typography>
					<Box>
						{[0, 1, 2].map((num) => (
							<>
								{num === 0 && (
									<div key={num}>
										<Box width={"100%"}>
											<TextField
												value={values.project1Title}
												name="project1Title"
												onChange={handleChange}
												fullWidth
												label={"Enter Project Title"}
												size={"small"}
											/>
											<br />
											<br />
											<br />
											<TextField
												value={values.project1Description}
												name="project1Description"
												onChange={handleChange}
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
								)}
								{num === 1 && (
									<div key={num}>
										<Box width={"100%"}>
											<TextField
												value={values.project2Title}
												name="project2Title"
												onChange={handleChange}
												fullWidth
												label={"Enter Project Title"}
												size={"small"}
											/>
											<br />
											<br />
											<br />
											<TextField
												value={values.project2Description}
												name="project2Description"
												onChange={handleChange}
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
								)}
								{num === 2 && (
									<div key={num}>
										<Box width={"100%"}>
											<TextField
												value={values.project3Title}
												name="project3Title"
												onChange={handleChange}
												fullWidth
												label={"Enter Project Title"}
												size={"small"}
											/>
											<br />
											<br />
											<br />
											<TextField
												value={values.project3Description}
												name="project3Description"
												onChange={handleChange}
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
								)}
							</>
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
						About
					</Typography>
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
					<Typography color={"gray"} variant="body1">
						Address Details
					</Typography>
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
					<Typography color={"gray"} variant="body1">
						Social Details
					</Typography>
					<Box display="flex">
						{[
							{ icon: <LinkedInIcon />, name: "linkedIn" },
							{ icon: <GitHubIcon />, name: "Github" },
							{ icon: <TwitterIcon />, name: "Twitter" },
							{ icon: <FacebookIcon />, name: "Facebook" },
						].map((social) => (
							<>
								{social.name === "linkedIn" && (
									<Box key={social.name} display={"flex"} width={"100%"}>
										<TextField
											value={values.ldLink}
											name="ldLink"
											onChange={handleChange}
											sx={{ width: "100%", mx: 1 }}
											size="small"
											fullWidth
											variant={"outlined"}
											label={`Entry ${social.name} Link`}
										/>
									</Box>
								)}
								{social.name === "Github" && (
									<Box key={social.name} display={"flex"} width={"100%"}>
										<TextField
											value={values.gitLink}
											name="gitLink"
											onChange={handleChange}
											sx={{ width: "100%", mx: 1 }}
											size="small"
											fullWidth
											variant={"outlined"}
											label={`Entry ${social.name} Link`}
										/>
									</Box>
								)}
								{social.name === "Twitter" && (
									<Box key={social.name} display={"flex"} width={"100%"}>
										<TextField
											value={values.twLink}
											name="twLink"
											onChange={handleChange}
											sx={{ width: "100%", mx: 1 }}
											size="small"
											fullWidth
											variant={"outlined"}
											label={`Entry ${social.name} Link`}
										/>
									</Box>
								)}
								{social.name === "Facebook" && (
									<Box key={social.name} display={"flex"} width={"100%"}>
										<TextField
											value={values.fbLink}
											name="fbLink"
											onChange={handleChange}
											sx={{ width: "100%", mx: 1 }}
											size="small"
											fullWidth
											variant={"outlined"}
											label={`Entry ${social.name} Link`}
										/>
									</Box>
								)}
							</>
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
						Experience Details
					</Typography>
					<Box>
						{[0, 1, 2].map((num) => (
							<>
								{num === 0 && (
									<div key={num}>
										<Box display={"flex"}>
											<TextField
												value={values.experience1Designation}
												name="experience1Designation"
												onChange={handleChange}
												size={"small"}
												variant="outlined"
												label={"Designation"}
												sx={{ mx: 1 }}
												fullWidth
											/>
											<TextField
												value={values.experience1Years}
												name="experience1Years"
												onChange={handleChange}
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
												value={values.experience1Description}
												name="experience1Description"
												onChange={handleChange}
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
								)}
								{num === 1 && (
									<div key={num}>
										<Box display={"flex"}>
											<TextField
												value={values.experience2Designation}
												name="experience2Designation"
												onChange={handleChange}
												size={"small"}
												variant="outlined"
												label={"Designation"}
												sx={{ mx: 1 }}
												fullWidth
											/>
											<TextField
												value={values.experience2Years}
												name="experience2Years"
												onChange={handleChange}
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
												value={values.experience2Description}
												name="experience2Description"
												onChange={handleChange}
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
								)}
								{num === 2 && (
									<div key={num}>
										<Box display={"flex"}>
											<TextField
												value={values.experience3Designation}
												name="experience3Designation"
												onChange={handleChange}
												size={"small"}
												variant="outlined"
												label={"Designation"}
												sx={{ mx: 1 }}
												fullWidth
											/>
											<TextField
												value={values.experience3Years}
												name="experience3Years"
												onChange={handleChange}
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
												value={values.experience3Description}
												name="experience3Description"
												onChange={handleChange}
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
								)}
							</>
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
							value={values.template}
							name="radio-buttons-group"
							sx={{ display: "flex" }}
						>
							<FormControlLabel
								value="1"
								onChange={(e) => {
									setFieldValue("template", e.target.value);
								}}
								control={<Radio />}
								label="Template 1"
							/>
							<FormControlLabel
								value="2"
								onChange={(e) => {
									setFieldValue("template", e.target.value);
								}}
								control={<Radio />}
								label="Template 2"
							/>
							<FormControlLabel
								value="3"
								onChange={(e) => {
									setFieldValue("template", e.target.value);
								}}
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
