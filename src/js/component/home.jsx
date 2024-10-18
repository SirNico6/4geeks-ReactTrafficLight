import React from "react";
import TrafficLight from "./trafficLight";

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
			<TrafficLight />
		</div>
	);
};

export default Home;
