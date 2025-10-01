import React from "react";
export default function Services() {
	const services = [
		"Web development (React, HTML/CSS, JS)",
		"Mobile apps (basic React Native prototypes)",
		"General programming & debugging",
	];
	return (
		<section>
			<h2>Services</h2>
			<ul className="services-list">
				{services.map((s, i) => (
					<li key={i}>{s}</li>
				))}
			</ul>
		</section>
	);
}
