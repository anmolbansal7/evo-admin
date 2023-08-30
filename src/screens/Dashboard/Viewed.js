import React from "react";
import "./Dashboard.css";
import event_poster from './assets/event.webp';

function Viewed(props) {
	return (
		<div className="bottom-card">
			<p>01</p>
			<div className="event-icon">
				<img src={event_poster} alt="event"></img>
			</div>
			<div className="details">
				<p className="big">Event Name</p>
				<p className="small">Views: 200</p>
			</div>
		</div>
	);
}

export default Viewed;
