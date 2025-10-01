import React from "react";
export default function About() {
	return (
		<section>
			<h2>About Me</h2>
			<div className="about-content">
				<img
					src="/profile.jpeg"
					alt="Aayush Thakur"
					className="about-image"
				/>
				<div className="about-text">
					<p>
						Aayush Thakur — Passionate developer focused on creating
						clean, efficient solutions. I specialize in web
						development with React and enjoy building applications
						that make a real difference. Always learning, always
						building.
					</p>
					<a
						href="/resume.pdf"
						target="_blank"
						rel="noreferrer"
						className="resume-link"
					>
						📄 Download my Resume (PDF)
					</a>
				</div>
			</div>
		</section>
	);
}
