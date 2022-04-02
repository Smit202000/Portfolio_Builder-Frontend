import { Box, Paper } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import HeroIntroSection from "../HeroIntroSection/HeroIntroSection";

const AuthPage = () => {
	return (
		<div className="page-container">
			<Paper sx={{ borderRadius: 1, width: 1200, height: "auto" }}>
				<Box sx={{ borderRadius: 1 }} display={"flex"} height={"100%"}>
					<Box
						flex={7}
						p={2}
						py={4}
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						sx={{ borderRight: "1px solid gray" }}
					>
						<HeroIntroSection />
					</Box>
					<Box
						display={"flex"}
						alignItems={"center"}
						justifyContent={"center"}
						flex={5}
						p={2}
					>
						<Box width={"100%"}>
							<Outlet />
						</Box>
					</Box>
				</Box>
			</Paper>
		</div>
	);
};

export default AuthPage;
