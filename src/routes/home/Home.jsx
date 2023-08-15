import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import "./home.scss";

const Home = () => {
	return (
		<div id="Home">
			<FontAwesomeIcon icon={faHome} className="home__font fa-bounce" />
			Home
		</div>
	);
};

export default Home;
