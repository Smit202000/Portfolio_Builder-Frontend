import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDataByUserNameAsync } from "../features/user.slice";

const PortfolioPage = () => {
	const { username } = useParams();
	const dispatch = useDispatch();
	const { userPortfolioData } = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(getUserDataByUserNameAsync({ username }));
	}, []);

	return (
		<div className="portfolio-page normal-page">
			<p>{JSON.stringify(userPortfolioData)}</p>
		</div>
	);
};

export default PortfolioPage;
