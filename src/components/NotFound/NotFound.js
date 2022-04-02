import { Box, Typography } from "@mui/material";
import React from "react";
import NotFoundLogo from "../../assets/404.svg";

const NotFound = () => {
	return (
		<div className="page-container normal-page">
			<Box
				display={"flex"}
				flexDirection={"column"}
				alignItems={"center"}
				justifyContent={"center"}
			>
				<img width={600} src={NotFoundLogo} alt="not-found" />
				<br />
				<br />
				<Typography align="justify" sx={{ width: 600 }} color="gray">
					{`Seems like we're always thinking of ourselves when looking for
					something that's lost, but we never think much about the lost,
					whatever, whoever is unable to be found, whether it's a set of keys
					left somewhere and forgotten, a couple of guys wandering aimlessly in
					the woods, or someone who's disappeared inside himself. What if that's
					what they wanted all along? Not to be found.`}
				</Typography>
			</Box>
		</div>
	);
};

export default NotFound;
