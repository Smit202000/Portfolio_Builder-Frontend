import {
	AppBar,
	Avatar,
	Box,
	Button,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Popover,
	Toolbar,
	Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import WorkIcon from "@mui/icons-material/Work";

import React, { useState } from "react";
import PortfolioForm from "../components/PortfolioForm/PortfolioForm";
import { setToken } from "../utils/tokens";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomePage = () => {
	const [open, setOpen] = useState(false);
	const [anchorEl, setAnchorEl] = useState(null);
	const navigate = useNavigate();
	const { loading, userData } = useSelector((state) => state.user);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const isPopoverOpen = Boolean(anchorEl);

	const handleMenuOption = (option) => {
		console.log(option);
		if (option === "logout") {
			setToken("");
			navigate("/auth/login");
		}
	};

	if (loading) {
		return <p>loading...</p>;
	}

	return (
		<div className="page-container normal-page">
			<Box
				height={"100%"}
				width={"100%"}
				display="flex"
				flexDirection={"column"}
			>
				<Box flex={1}>
					<AppBar position="static">
						<Toolbar>
							<IconButton
								size="large"
								edge="start"
								color="inherit"
								aria-label="menu"
								sx={{ mr: 2 }}
								onClick={() => {
									setOpen(true);
								}}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								Portfolio Builder
							</Typography>
							<Button sx={{ mr: 4 }} disabled color="error" variant="contained">
								Visit site
							</Button>
							<Avatar onClick={handleClick} src={userData?.image} />
						</Toolbar>
					</AppBar>
				</Box>
				<Box flex={10} px={2} overflow={"scroll"}>
					<PortfolioForm />
				</Box>
				<Box
					flex={1}
					display={"flex"}
					alignItems={"center"}
					justifyContent={"center"}
					bgcolor="#34495e"
				>
					<Typography color="white" variant="body1">
						&copy; 2022, Portfolio Pvt. Ltd.
					</Typography>
				</Box>
			</Box>
			<Drawer
				anchor={"left"}
				open={open}
				onClose={() => {
					setOpen(false);
				}}
			>
				<Paper elevation={0} sx={{ width: 250 }}>
					<br />
					<List>
						{[
							{ text: "Interview Tips", icon: <WorkIcon /> },
							{ text: "Communication", icon: <ConnectWithoutContactIcon /> },
							{ text: "About", icon: <InfoIcon /> },
						].map((option) => (
							<ListItem button key={option}>
								<ListItemIcon>{option.icon}</ListItemIcon>
								<ListItemText primary={option.text} />
							</ListItem>
						))}
					</List>
				</Paper>
			</Drawer>
			<Popover
				anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
				open={isPopoverOpen}
				onClose={handleClose}
				anchorEl={anchorEl}
			>
				<Paper>
					<List>
						{["settings", "logout"].map((option) => (
							<ListItem
								key={option}
								onClick={() => {
									handleMenuOption(option);
								}}
								button
							>
								<ListItemText primary={option} />
							</ListItem>
						))}
					</List>
				</Paper>
			</Popover>
		</div>
	);
};

export default HomePage;
