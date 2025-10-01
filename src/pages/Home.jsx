import React from "react";
import { Link } from "react-router-dom";
import homeImage from "../assets/forHome.jpg";

export default function Home() {
	return (
		<section className="home-hero">
			<div className="home-content">
				<div className="home-text">
					<h1>Welcome — I'm Aayush</h1>
					<p>
						Mission: Build simple, reliable web experiences that
						help people learn and do more.
					</p>
					<div className="home-actions">
						<Link to="/about">
							<button className="ios-button primary">
								About Me
							</button>
						</Link>
						<Link to="/projects">
							<button className="ios-button secondary">
								See Projects
							</button>
						</Link>
					</div>
				</div>
				<div className="home-image">
					<img src={homeImage} alt="Aayush Thakur" />
				</div>
			</div>
		</section>
	);
}
