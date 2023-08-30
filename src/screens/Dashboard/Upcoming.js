import React from "react";
import "./Dashboard.css";
import calendar from "./assets/calendar.svg";
import rupee from "./assets/rupee.svg";
import like from "./assets/like.svg";
import event_poster from './assets/event.webp';

function Upcoming(props) {
	return (
		<div className="middle-card">
			<p>{props.id || '-'}</p>
			<div className="upcoming-icon">
				<img src={event_poster} alt="event"></img>
			</div>
			<div className="details">
				<p>{props.name || 'Sample Event'}</p>
				<div className="sign-detail">
					<img src={calendar} alt="" className="detail-icon" />
					{props.date || '20 August 2022'}
				</div>
				<div className="sign-detail">
					<img src={rupee} alt="" className="detail-icon" />
					{props.isPaid ? props.cost : "Free"}
				</div>
				<div className="sign-detail">
					<img src={like} alt="" className="detail-icon" />
					{props.likes || '2'}
				</div>
			</div>
		</div>
	);
}

export default Upcoming;
