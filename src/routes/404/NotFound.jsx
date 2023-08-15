import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSadTear } from "@fortawesome/free-solid-svg-icons";

import "./notfound.scss";

const NotFound = () => {
	return (
		<div id="Not-Found">
			<FontAwesomeIcon icon={faFaceSadTear} />
			NotFound
			<FontAwesomeIcon icon={faFaceSadTear} />
		</div>
	);
};

export default NotFound;
