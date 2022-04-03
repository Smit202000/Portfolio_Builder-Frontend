import React from "react";
import { Box, Typography } from "@mui/material";
import PortfolioIcon from "../../assets/portfolio.svg";
import WomenSpeakingIcon from "../../assets/women-speaking.svg";

const HeroIntroSection = () => {
	return (
		<Box
			flexDirection={"column"}
			display="flex"
			px={1}
			justifyContent={"center"}
			alignContent={"center"}
		>
			<Box
				justifyContent={"space-between"}
				alignItems={"center"}
				display={"flex"}
			>
				<img width={300} src={PortfolioIcon} alt="portfolio-icon" />
				<Typography align={"justify"} color="gray">
					{
						"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
					}
				</Typography>
			</Box>
			<br />
			<br />
			<Box
				display={"flex"}
				justifyContent={"space-between"}
				alignItems={"center"}
			>
				<Typography align="justify" color="gray">
					{
						"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
					}
				</Typography>
				<img width={300} src={WomenSpeakingIcon} alt="portfolio-icon" />
			</Box>
		</Box>
	);
};

export default HeroIntroSection;
