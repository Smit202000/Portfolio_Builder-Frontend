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

const PortfolioForm = () => {
	return (
		<Box py={2} width={"100%"}>
			<Typography color="gray" sx={{ p: 1 }} variant="h6">
				{"fill the form & We'll handle rest for you..."}
			</Typography>
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
						value={""}
						type="tel"
						size="small"
						variant="outlined"
						label={"Contact"}
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
					value={""}
					label="Tell Us Little Bit About Yourself"
					multiline
					rows={5}
					size="small"
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
					value={""}
					size="small"
					fullWidth
					variant={"outlined"}
					label="Entry Country"
				/>
				<br />
				<TextField
					value={""}
					size="small"
					fullWidth
					variant={"outlined"}
					label="Entry State"
				/>
				<br />
				<TextField
					value={""}
					size="small"
					fullWidth
					variant={"outlined"}
					label="Entry City"
				/>
				<br />
				<TextField
					value={""}
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
				<Button fullWidth sx={{ mx: 1 }} color="error" variant="contained">
					Reset
				</Button>
				<Button fullWidth sx={{ mx: 1 }} color="primary" variant="contained">
					Save & Deploy
				</Button>
			</Box>
		</Box>
	);
};

export default PortfolioForm;
